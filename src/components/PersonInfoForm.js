import React, { useState } from 'react';

function PersonInfoForm() {
  const [input, setInput] = useState({
    name: "",
    age: ""
  });

  function handleInputChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  }

  return (
    <>
      <label>Name: <input type="text" name="name" onChange={handleInputChange} value={input.name} /></label>
      <br />
      <label>Age: <input type="text" name="age" onChange={handleInputChange} value={input.age} /></label>
      <h1>Hello, my name is {input.name === "" ? ".." : input.name}.</h1>
      {input.age !== "" ? <h2>Age: {input.age}</h2> : ""}
    </>
  )
}

export default PersonInfoForm;