import React from 'react';
// import { render } from 'react-dom';
import confLogo from '../images/badge-header.svg';
import '../styles/Badge.css';

// const Person = {
//   firstName: 'Ricardo',
//   lastName: 'Serin',
// }

class Badge extends React.Component {
  render() {
    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={confLogo} alt='Logo de conferencia' />
        </div>
        <div className='Badge__section-name'>
          <img className='Badge__avatar' src='https://s.gravatar.com/avatar/49bc8565815bb755961718b5f85b801d?s=80' alt='Avatar' />
          <h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
        </div>
        <div className='Badge__section-info'>
          <h2>{this.props.jobTittle}</h2>
          <div>@{this.props.twitter}</div>
        </div>
        <div className='Badge__footer'>
          <p>#Platziconf</p>
        </div>
      </div>
    );
  }
}

export default Badge;