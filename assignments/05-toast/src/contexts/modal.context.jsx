import { createContext, useContext, useState } from "react";
import Modal from "../components/Modal/Modal";

const initialValue = {
  open: () => {},
  close: () => {},
};

const ModalContext = createContext(initialValue);

export const useModal = () => useContext(ModalContext);

function ModalProvider({ children }) {
  const [modalOptions, setModalOptions] = useState(null);

  const value = {
    open: (options) => {
      setModalOptions(options);
      setTimeout(() => setModalOptions(null), options.timer);
    },
    close: () => {
      setModalOptions(null);
    },
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalOptions && (
        <Modal title={modalOptions.title} content={modalOptions.content} />
      )}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
