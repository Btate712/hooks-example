import React from 'react';
import { useInputChange } from '../helperFunctions/useInputChange';

function BookInfoForm() {  
  
  const [input, handleInputChange] = useInputChange({
    title: "",
  });

  return (
    <>
      <label>Title: <input type="text" name="title" onChange={handleInputChange} value={input.title} /></label>
      <h1>Title is {input.title === "" ? ".." : input.title}.</h1>
    </>
  )
}

export default BookInfoForm;