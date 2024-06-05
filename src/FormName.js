import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormName() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fname, lname }),
      });

      if (response.ok) {
        const data = await response.json();
        navigate('/result', { state: { fname: data.fname, lname: data.lname } });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section>
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        name="fname"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lname"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        required
      />
      <input type="submit" value="Send" />
    </form>
    </div>
    </section>
  );
}

export default FormName;