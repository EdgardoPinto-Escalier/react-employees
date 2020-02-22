import React from 'react';
import Card from './Card';

const CardList = ({ employees }) => {
  return (
    <div className='center container pa3'>
      {
        employees.map((user, i) => {
          return (
            <Card
              key={i}
              id={employees[i].id}
              photo={employees[i].photo}
              name={employees[i].name}
              role={employees[i].role}
              email={employees[i].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;