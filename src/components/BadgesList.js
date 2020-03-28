import React from 'react';
import '../styles/BadgeList.css';

class BadgesList extends React.Component {
  render() {
    return(
      this.props.badgesListValues.map((badge) => {
        return (
          <ul key={badge.id} className='BadgesList__Badge-container row'>
            <div className='BadgeList__BadgeAvatar-container col-2'>
              <img className='BadgeList__BadgeAvatar' src={badge.avatarUrl} alt='BadgeAvatar' />
            </div>
            <div className='BadgeList__BadgeInfo-container col-10' >
              <span className='font-weight-bold'>{badge.firstName} {badge.lastName}</span>
              <div className='BadgeList__BadgeInfo-twitter'>@{badge.twitter}</div>
              <p>{badge.jobTitle}</p>
            </div>
          </ul>
        );
      })
    );
  };
}

export default BadgesList;