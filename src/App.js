import React, { Component } from 'react';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ users: json }))
  }
  render() {
    const { users } = this.state;
    console.log(users);
    return (
      <div className="app container">
        <div className="app jumbotron">
          <h1 className="display-4">
            Users
          </h1>
        </div>
        <div className="user-cards-container">
          {users.map((user) => (
            <div className="app card" key={user.id}>
              <div className="app card-header">
                #{user.id} {user.username}
              </div>
              <div className="card-body">
                <p className="card-text">
                  <b>Email:</b> {user.email}<br />
                  <b>Name:</b> {user.name}<br />
                  <b>Phone:</b> {user.phone}<br />
                  <b>Website:</b> {user.website}<br />
                  <b>Company Name:</b> {user.company.name}<br />
                  <b>Address: </b><br />
                  <div className="card-text">
                    {user.address.street}, {user.address.suite}, {user.address.city} <br />
                    <br />
                    Zipcode: {user.address.zipcode}<br />
                    Location: {user.address.geo.lat} lat, {user.address.geo.lng} lng
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
}
export default App;