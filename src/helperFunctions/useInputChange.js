import { useState } from 'react';

export const useInputChange = (initialState = {}) => {
  const [input, setInput] = useState(initialState)

  const handleInputChange = event => setInput({
    ...input,
    [event.currentTarget.name]: event.currentTarget.value
  })

  return [input, handleInputChange];
}