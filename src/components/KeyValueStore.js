import React, { useState, useEffect } from 'react';
import '../styles/App.css';

const KeyValueStore = () => {
  
    const [keyValues, setKeyValues] = useState({});
  
    const updateKeyValue = (key, value) => {};
  
    const handleUpdateClick = () => {};
  
    const handleDeleteClick = (key) => {};
  
    useEffect(() => {}, []);
  
    return (
      <div>
        <h1>Key Value Store</h1>
          <div>
            {/* Map the key-value using the below HTML */}
              <div key={key} className='key-value-div'>
                <span className='key-field'>key:</span>
                <input
                    className='value-field'
                    type="text"
                />
                <button className='delete-btn'>Delete</button>
              </div>

            {/* Do not include Update button, while mapping the key-value */}
            <button className='update-btn'>Update Values</button>
          </div>

          <p>No key values found in URL.</p>
      </div>
    )
}

export default KeyValueStore;