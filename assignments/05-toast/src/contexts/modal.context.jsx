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
  // const timeOut = useTimeOut;

  const value = {
    open: (options) => {
      setModalOptions(options);
      setTimeout(() => setModalOptions(null), options.timer);
      // clear는 어디서 시키지? 꼭 해야하나?
      // 무조건으 ㄴ아니고 언마운트
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
