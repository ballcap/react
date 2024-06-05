import React from 'react';
import { useLocation } from 'react-router-dom';

function ResultComponent() {
  const location = useLocation();
  const { formData } = location.state || { formData: { f_name: '', l_name: '' } };

  return (
      <div>
        <h1>Hello {formData.f_name} {formData.l_name}! </h1>
      </div>
  );
}

export default ResultComponent;
