import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      isNone: false,
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // destructuring used to pull the value out of the target before setting state
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
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
          <br />
          <fieldset>
            <legend>Gender</legend>
            <label htmlFor="female">
              <input
                required
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={this.state.gender === 'female'}
                onChange={this.handleChange}
              />
              Female
            </label>
            <label htmlFor="male">
              <input
                required
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={this.state.gender === 'male'}
                onChange={this.handleChange}
              />
              Male
            </label>
          </fieldset>
          <br />

          <label htmlFor="destination">Destination:</label>
          <select
            required
            name="destination"
            id="destination"
            value={this.state.destination}
            onChange={this.handleChange}
          >
            <option value="">
              -- Please select your destination --
            </option>
            <option value="buenos aires">Buenos Aires</option>
            <option value="honolulu">Honolulu</option>
            <option value="prague">Prague</option>
          </select>
          <br />
          <br />
          <fieldset>
            <legend>Dietary Restrictions?</legend>
            <label htmlFor="none">
              <input
                type="checkbox"
                name="isNone"
                id="none"
                onChange={this.handleChange}
                checked={this.state.isNone}
              />
              None
            </label>

            <label htmlFor="kosher">
              <input
                type="checkbox"
                name="isKosher"
                id="kosher"
                onChange={this.handleChange}
                checked={this.state.isKosher}
              />
              Kosher
            </label>
            <label htmlFor="lactosefree">
              <input
                type="checkbox"
                name="isLactoseFree"
                id="lactosefree"
                onChange={this.handleChange}
                checked={this.state.isLactoseFree}
              />
              Lactose-Free
            </label>
            <label htmlFor="vegan">
              <input
                type="checkbox"
                name="isVegan"
                id="vegan"
                onChange={this.handleChange}
                checked={this.state.isVegan}
              />
              Vegan
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
        <p>
          Your destination: {this.state.destination.toUpperCase()}
        </p>
        <p>
          Your dietary restrictions:{' '}
          {this.state.isNone ? ' -- None --' : ''}
        </p>
        <p>Kosher: {this.state.isKosher ? 'Yes' : 'No'}</p>
        <p>Lactose-free: {this.state.isLactoseFree ? 'Yes' : 'No'}</p>
        <p>Vegan: {this.state.isVegan ? 'Yes' : 'No'}</p>
      </main>
    );
  }
}

export default App;

/**
 * TODO: experiment with spread operator for dietary restrictions section
 */
