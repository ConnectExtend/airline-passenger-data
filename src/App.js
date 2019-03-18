import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // destructuring used to pull the value out of the target before setting state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // value property added to keep state as "sole source of truth"
  render() {
    return (
      <main>
        <form>
          <label>
            First Name:
            <input
              required
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              required
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Age:
            <input
              required
              type="number"
              name="age"
              value={this.state.age}
              min="1"
              max="199"
              onChange={this.handleChange}
            />
          </label>
          <br />

          <h1>
            {this.state.firstName} {this.state.lastName}{' '}
            {this.state.age}
          </h1>

          {/* Create radio buttons for gender here */}
          <br />

          {/* Create select box for location here */}
          <br />

          {/* Create check boxes for dietary restrictions here */}
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {/* First and last name here */}</p>
        <p>Your age: {/* Age here */}</p>
        <p>Your gender: {/* Gender here */}</p>
        <p>Your destination: {/* Destination here */}</p>
        <p>
          Your dietary restrictions:
          {/* Dietary restrictions here, comma separated */}
        </p>
      </main>
    );
  }
}

export default App;
