import { useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => setValue(event.target.value);

  return { value, setValue, handleChange };
};

export default useInput;