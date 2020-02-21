import React from 'react';


const Card = ({ name, photo, role, email, id }) => {
  return (
    <div className="tc bg-light dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`images/${photo}`} alt="employee"/>
      <div>
        <h2>{name}</h2>
        <h3>{role}</h3>
        <h3>{email}</h3>
      </div>
    </div>
  );
}

export default Card;