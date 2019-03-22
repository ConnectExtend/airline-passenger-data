import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
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
        <h1>Golden Sky Passenger Data</h1>
        <form>
          <label htmlFor="firstName">
            First Name:
            <input
              required
              type="text"
              name="firstName"
              id="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="lastName">
            Last Name:
            <input
              required
              type="text"
              name="lastName"
              id="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="age">
            Age:
            <input
              required
              type="number"
              name="age"
              id="age"
              value={this.state.age}
              min="1"
              max="199"
              onChange={this.handleChange}
            />
          </label>
          <br />

          <fieldset>
            <legend>Gender</legend>
            <label>
              <input
                required
                type="radio"
                name="gender"
                value="female"
                checked={this.state.gender === 'female'}
                onChange={this.handleChange}
              />
              Female
            </label>
            <label>
              <input
                required
                type="radio"
                name="gender"
                value="male"
                checked={this.state.gender === 'male'}
                onChange={this.handleChange}
              />
              Male
            </label>
          </fieldset>
          <br />

          <button>SUBMIT</button>
        </form>
        <hr />
        <h2>Information summary:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
      </main>
    );
  }
}

export default App;
