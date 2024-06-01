import { createContext, useCallback, useContext, useState } from 'react';
import Toast from '../components/Toast/Toast';

const initialValue = {
  open: () => {},
  close: () => {}
};

const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

function ToastProvider({ children }) {
  const [modalOptions, setModalOptions] = useState([]);
  const close = useCallback((id) => {
    setModalOptions((prev) => prev.filter((option) => option.id !== id));
  }, []);

  const value = {
    open: (options) => {
      setModalOptions((prev) => [
        ...prev,
        { ...options, space: modalOptions.length === 0 ? 10 : modalOptions.length * 10 }
      ]);
      setTimeout(() => close(options.id), options.timer);
    },
    close: (id) => {
      setModalOptions((prev) => prev.filter((option) => option.id !== id));
    }
  };

  const toastList = () => {
    return modalOptions.map((item) => {
      console.log('space', item.space);
      return (
        <Toast
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          timer={item.timer}
          space={item.space}
        />
      );
    });
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {modalOptions && toastList()}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
