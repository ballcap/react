import React from 'react';
import { useLocation } from 'react-router-dom';

function ResultComponent() {
  const location = useLocation();
  const { fname, lname } = location.state || {};

  return (
    <div>
      <h1>Submitted Data</h1>
      {fname && lname ? (
        <div>
          <p>First Name: {fname}</p>
          <p>Last Name: {lname}</p>
        </div>
      ) : (
        <p>No data submitted</p>
      )}
    </div>
  );
}

export default ResultComponent;
