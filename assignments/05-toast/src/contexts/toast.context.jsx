import { createContext, useContext, useState } from 'react';
import Toast from '../components/Toast/Toast';

const initialValue = {
  open: () => {},
  close: () => {}
};

const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

function ToastProvider({ children }) {
  const [modalOptions, setModalOptions] = useState(null);

  const value = {
    open: (options) => {
      setModalOptions(options);
      console.log(options);
      setTimeout(() => setModalOptions(null), options.timer);
    },
    close: () => {
      setModalOptions(null);
    }
  };
  console.log(modalOptions);
  return (
    <ToastContext.Provider value={value}>
      {children}
      {modalOptions && <Toast title={modalOptions.title} content={modalOptions.content} timer={modalOptions.timer} />}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
