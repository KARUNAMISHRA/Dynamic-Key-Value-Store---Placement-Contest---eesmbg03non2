 import React, { useState, useEffect } from 'react';
import '../styles/App.css';


const KeyValueStore = () => {
  
  const [keyValues, setKeyValues] = useState({});

  
  const updateKeyValue = (key, value) => {
    setKeyValues(prevState => {
      return { ...prevState, [key]: value };
    });
  };

  
  const handleUpdateClick = () => {
   
    const queryParams = Object.keys(keyValues)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(keyValues[key])}`)
      .join('&');

  
    window.history.replaceState(null, null, `?${queryParams}`);
  };

 
  const handleDeleteClick = (key) => {
    
    setKeyValues(prevState => {
      const newState = { ...prevState };
      delete newState[key];
      return newState;
    });
  };

  
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const newKeyValues = {};

    for (let [key, value] of queryParams.entries()) {
      newKeyValues[decodeURIComponent(key)] = decodeURIComponent(value);
    }

    setKeyValues(newKeyValues);
  }, []);

  return (
    <div>
      <h1>Key Value Store</h1>
      <div>
        {/* map the key-value pairs from the state */}
        {Object.entries(keyValues).map(([key, value]) => (
          <div key={key} className='key-value-div'>
            <span className='key-field'>{key}:</span>
            <input
              className='value-field'
              type="text"
              value={value}
              onChange={(e) => updateKeyValue(key, e.target.value)}
            />
            <button className='delete-btn' onClick={() => handleDeleteClick(key)}>Delete</button>
          </div>
        ))}

        
        <button className='update-btn' onClick={handleUpdateClick}>Update Values</button>
      </div>

      
      {Object.keys(keyValues).length === 0 && <p>No key values found in URL.</p>}
    </div>
  );
};

export default KeyValueStore;
