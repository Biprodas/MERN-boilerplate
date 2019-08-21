const Joi = require('@hapi/joi');
const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, validate } = require("../models/User");
const express = require("express");
const router = express.Router();


// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => {
  res.send('User works..');
});

// @route   GET api/users
// @desc    Get all the users
// @access  Public
router.get('/', async (req, res) => {
  const users = await User.find({}).sort('name');
  res.send(users);
});

// @route   GET api/users/me
// @desc    Get the current user
// @access  Private
router.get("/me", auth, async (req, res) => {
  if(!req.user) return res.send("No user exits");
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});


// @route   POST api/users/register
// @desc    Register user / Returing JWT Token
// @access  Public
router.post("/register", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  let user = await User.findOne({ username: req.body.username });
  if (user) return res.status(400).send("Username already exists.");
  
  user = _.pick(req.body, ["name", "username", "password", "role"]);
  
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  
  //console.log(user);

  user = new User(_.pick(user, ["name", "username", "password", "role"]));
  await user.save();

  const token = user.generateAuthToken();
  res
  .header("x-auth-token", token)
  .send(_.pick(user, ["_id", "name", "username", "role"]));
});


// @route   POST api/users/login
// @desc    Login user / Returing JWT Token
// @access  Public
router.post('/login', async (req, res) => {
  const { error } = validateLogin(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send('Invalid email or password.');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid email or password.');

  const token = user.generateAuthToken();
  res.send(token);
});

function validateLogin(req) {
  const schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
  };
  return Joi.validate(req, schema);
}

module.exports = router;