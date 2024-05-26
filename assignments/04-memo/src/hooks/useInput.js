import { useState } from "react";

const useInput = (initialState) => {
  const [value, setValue] = useState(initialState);
  const handler = (e) => {
    setValue(e.target.value);
  };
  const initialize = (initialState) => {
    setValue(initialState);
  };

  return [value, handler, initialize];
};

export default useInput;
