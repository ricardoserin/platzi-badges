import React from 'react';
import '../styles/BadgeNew.css'
import NavBar from '../components/NavBar';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={header} alt='logo'></img>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
            <Badge 
                  firstName='Ricardo' 
                  lastName='Serin'
                  jobTitle='Kickass Fronted Engineer'
                  twitter='@ricardoserin'
                  />
            </div>
            <div className='col-6'>
              <BadgeForm />
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
