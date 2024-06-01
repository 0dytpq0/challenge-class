import { createContext, useContext } from 'react';
import useInput from '../hooks/useInput';

const initialValue = {
  setTitle: () => {},
  setContent: () => {},
  setTimert: () => {}
};

const FormContext = createContext(initialValue);

export const useForm = () => useContext(FormContext);

export function FormProvider({ children }) {
  const [title, handleTitle] = useInput('Scheduled: Catch up');
  const [content, handleContent] = useInput('Friday, February 10, 2023 at 5:57 PM');
  const [timer, handleTimer] = useInput(2000);
  const value = {
    setTitle: (value) => handleTitle(value),
    setContent: (value) => handleContent(value),
    setTimer: (value) => handleTimer(value),
    formTitle: title,
    formContent: content,
    formTimer: timer
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
