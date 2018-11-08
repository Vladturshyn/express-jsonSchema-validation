import React from 'react';

class MyLogin extends React.Component {
  state = {
      email:'',
      password:'',
  };

  handleChangeEmail = (e) =>{
    this.setState({ email: e.target.value});
  };
  handleChangePassword = (e) =>{
    this.setState({ password: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        email: this.state.email,
        password: this.state.password
    };
    fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
     },
      body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('ошибка' + error));
  };

  render() {
    return (
      <form method='POST' onSubmit={this.handleSubmit}>
      <h1>Login</h1>
        <input name="email" type="email" min="6" max="40" required onChange={this.handleChangeEmail}/>
        <input name="password" type="password" min="6" max="18" required onChange={this.handleChangePassword}/>
        <button>Send data!</button>
      </form>
    );
  }
}

export default MyLogin;