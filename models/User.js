const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require('@hapi/joi');
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    default: "guest"
  }
  //roles: [],
  //operations: []
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      username: this.username,
      isAdmin: this.isAdmin,
      role: this.role
    },
    config.get("jwtPrivateKey")
  );
  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string()
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;