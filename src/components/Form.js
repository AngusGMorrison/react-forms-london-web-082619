import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    const allSubmittedData = this.state.submittedData.concat(formData);
    this.setState({submittedData: allSubmittedData});
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return(
        <div>
          <span>{data.firstName}</span>
          <span>{data.lastName}</span>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
          <input type="submit" />
        </form>
        {this.listOfSubmissions()}
      </div>
    );
  }
}

export default Form;