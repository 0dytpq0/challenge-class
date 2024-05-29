// 1. 만든다 : createContext

import { createContext, useContext, useState } from "react";

const initialValue = { isLoggedIn: false };
export const AuthContext = createContext(initialValue);

// 2. 사용한다 : useContext
// 멋지게 사용하는 방법이 있는데, 쫌 있다가 알려드림.

// 화살표 함수 -> 내가 실행하고 싶을 때 실행
export const useAuth = () => useContext(AuthContext);

// 3. 범위를 지정해서 값을 내려준다.
// 프로바이더

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  // AuthProvider 리렌더링 -> value 다시 생성(useMemo,useCallback으로 캐시하더라도 디펜던시의 값이 바껴서 최신 값으로 바꿔서 재 생ㅅ겅되기에 의미없다. 그러나 사용이 가능할 때도 있다!)
  //  -> 아래도 다 리렌더링
  // value가 하나로 취급된다 = value 내부의 일부 값만 바뀌더라도 전체에서 value가 바뀌는 것이기에
  // 불필요한 리렌더링들이 일어나게된다.
  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
