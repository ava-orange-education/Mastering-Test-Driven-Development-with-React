import React from 'react';

const Greeting = ({ name }) => {
  return (
    <div className='greeting'>
      <h1>Hello, {name}!</h1>
      <p>Welcome to our website.</p>
    </div>
  );
};

export default Greeting;
