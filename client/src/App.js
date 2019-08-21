import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './containers/layout/NavBar';
import SideBar from './containers/layout/SideBar';
import Test from './components/Test';

class App extends Component {

  state = {
    user: null
  }

  componentDidMount() {
    
  }
  
  render() {
    return (
      <BrowserRouter>
        <header>
            <NavBar />
        </header>
        <section className="row">
          <aside className="col-md-2">
            <SideBar />
          </aside>
          <section>
            <main>
             <Route exach path="/one" component={Test} />
             <Route exach path="/two" component={Test} />
            </main>
          </section>
        </section>
      </BrowserRouter>

    )
  }
}

export default App;