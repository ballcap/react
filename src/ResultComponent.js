import React from 'react';
import { useLocation } from 'react-router-dom';

function ResultComponent() {
  const location = useLocation();
  const { fname, lname } = location.state || {};

  return (
    <div>
      <h1>Result</h1>
      <p>First Name: {fname}</p>
      <p>Last Name: {lname}</p>
    </div>
  );
}

export default ResultComponent;
