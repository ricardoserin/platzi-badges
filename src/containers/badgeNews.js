import React from 'react';
import NavBar from '../components/NavBar';
import header from '../images/badge-header.svg';
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={header} alt='logo'></img>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
