import React from 'react';
import '../styles/BadgeNew.css'
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
class BadgeNew extends React.Component {
  
  state = { form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  } };

  handleChange = e => {
  //Primera forma para guardar todos en el form
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;
    // this.setState({
    //   form : nextForm,
    // });
  //Segunda forma
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value,}
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={header} alt='logo'></img>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
            <Badge 
                  firstName = {this.state.form.firstName}
                  lastName = {this.state.form.lastName}
                  jobTittle = {this.state.form.jobTittle}
                  twitter = {this.state.form.twitter}
                  // {`@${this.state.form.twitter}`}
                  />
            </div>
            <div className='col-6'>
              <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// <Badge 
//   firstName='Ricardo' 
//   lastName='Serin'
//   jobTitle='Kickass Fronted Engineer'
//   twitter='@ricardoserin'
//   />

export default BadgeNew;
