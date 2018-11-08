import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MyForm from './MyForm.js';
import MyLogin from './MyLogin';
import Private from './Private';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
         <Link to="/login"> <li>Login</li></Link>
         <Link to="/regist"><li>Registration</li></Link>
         <Link to="/private"><li>Private Access only</li></Link>
        </ul>
          <Route path="/login" component={ MyLogin }></Route>
          <Route path="/regist" component={ MyForm }></Route>
          <Route path="/private" component={ Private }></Route>
      </div>
      </Router>
    );
  }
}

export default App;
