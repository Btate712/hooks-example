import React, { useState } from 'react';

function PersonInfoForm() {
  const [name, setName] = useState("");

  function nameInputChanged(event) {
    setName(event.target.value)
  }

  return (
    <>
      <label>Name: <input type="text" onChange={nameInputChanged} value={name} /></label>
      {console.log(name)}
      <h1>Hello, my name is {name === "" ? ".." : name}.</h1>
    </>
  )
}

export default PersonInfoForm;