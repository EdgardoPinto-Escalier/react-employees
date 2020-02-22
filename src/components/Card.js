import React from 'react';


const Card = ({ name, photo, role, email, id }) => {
  return (
    <div className="tc ba dim b--black-10 bg-light br3 pa3 ma2 grow bw2">
      <img src={`images/${photo}`} alt="employee" className='br-100 h4 w4 dib ba pa2 b--black-10'/>
      <div>
        <h2>{name}</h2>
        <h3>{role}</h3>
        <h3>{email}</h3>
      </div>
    </div>
  );
}

export default Card;