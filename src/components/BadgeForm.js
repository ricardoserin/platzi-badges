import React from 'react';

class BadgeForm extends React.Component {
  state = {};
//Clase 14 Enlazando Eventos
  handleChange = e => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value,
    // });
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleClick = e => {
    console.log('Button was clicked');
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
  }
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>First Name</label>
            <input onChange={this.handleChange} className='form-control' type='text' name='firstName' />
          </div>
          <div className='form-group'>
            <label>Last Name</label>
            <input onChange={this.handleChange} className='form-control' type='text' name='lastName' />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input onChange={this.handleChange} className='form-control' type='email' name='email' />
          </div>
          <div className='form-group'>
            <label>Job Tittle</label>
            <input onChange={this.handleChange} className='form-control' type='text' name='jobTittle' />
          </div>
          <div className='form-group'>
            <label>Twitter</label>
            <input onChange={this.handleChange} className='form-control' type='text' name='twitter' />
          </div>
          <button onClick={this.handleClick} className='btn btn-primary'>Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;