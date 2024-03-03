// InputForm.jsx
import React, { useState } from 'react';

function InputForm({ onSubmit }) {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ source, destination });
  };

  return (
    <div className='container d-flex  justify-content-center p-5 '>
    <form onSubmit={handleSubmit} className='form'>
      <label>
        Source:
        <input className='form-control mb-3'
          type="text"
          value={source}
          onChange={(event) => setSource(event.target.value)}
        />
      </label>
      <br />
      <label>
        Destination:
        <input className='form-control mb-3 '
          type="text"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </label>
      <br />
      <button className="btn btn-primary" type="submit">Search</button>
    </form>
    </div>
  );
}

export default InputForm;
