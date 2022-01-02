import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    if (inputValue.length <20) {
      setInputValue(e.target.value);
    } else {
      setInputValue('')
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='ZoomTitle'>
        <h1>{inputValue}</h1>
      </div>
      <input
        onChange={handleInputChange}
        type='text'
        placeholder='Limite 20 caracteres'
        value={inputValue}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;