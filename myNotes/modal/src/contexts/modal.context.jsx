// 1. 만든다 -> createContext
// 2. 사용한다 -> useContext
// 3. 범위를 지정해서 값을 내려준다 -> Provider

import { useScrollLock } from "@yoojinyoung/usescrolllock";
import { createContext, useContext, useState } from "react";
import Modal from "../components/Modal";

const initialValue = {
  open: () => {},
  close: () => {},
};

const ModalContext = createContext(initialValue);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  // 무엇을 상태로 관리해야할까?
  // 보여줄 것 자체를 상태로 관리해도된다.
  const [modalOptions, setModalOptions] = useState(null);
  const scrollLock = useScrollLock();

  // 내 useModal을 사용하는 사람은 뭘 기대할까 ? 열고 닫기 정도를 기대하겠지? => useModal의 API(application Interface)를 설계한다.
  const value = {
    open: (options) => {
      setModalOptions(options);
      scrollLock.lock();
    },
    close: () => {
      setModalOptions(null);
      scrollLock.release();
    },
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalOptions && (
        <Modal title={modalOptions.title} content={modalOptions.contet} />
      )}
    </ModalContext.Provider>
  );
}
