import { createContext, useContext, useState } from "react";

type ModalContextValue = {
  // 리턴값이 필요하지 않아. void
  // open 함수는 인자로 element가 들어오겠는데? 아래 인터페이스 설계에서 <SomeModal /> 엘리멘트를 넣어주기 때문.
  open: (element: React.ReactElement) => void;
  close: () => void;
};

// 초기값일 땐 걍 비어있는 함수를 넣어 뭐가 들어오고 뭐가 나갈지 모르니까
const initialValue: ModalContextValue = {
  // 여기엔 왜 element 안써주나요? 쓰나 안쓰나 상관없거든 ㅇㅇ
  // 형태만 맞춰서 넣어주자
  open: () => {},
  close: () => {},
};
// createContext에 value의 타입을 넣어줘야한다. createContext<T>() => T는 인자로 넣어주는 defaultValue : T : Context<T>(훅으로 썻을 때 리턴 값으로도 준다)
const ModalContext = createContext<ModalContextValue>(initialValue);
export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  // modalElement를 보여주지 않을 땐 null일 거잖아?
  const [modalElement, setModalElement] = useState<React.ReactElement | null>(
    null
  );

  const open: ModalContextValue["open"] = (element) => {
    setModalElement(element);
  };
  const close: ModalContextValue["close"] = () => {
    setModalElement(null);
  };

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      {modalElement}
    </ModalContext.Provider>
  );
}

// 사람들이 어떻게 쓰게 만들까? -> 인터페이스 설계
// const modal = useModal()
// modal.open(<SomeModal />)
// modal.close()
