import { useShallow } from "zustand/react/shallow";
import useLoginStore from "../zustand/login.store";

function Button() {
  // islogIn이 바뀌나? ㄴㄴ 리렌더링이안됨
  // const logIn = useLoginStore((state) => state.logIn);
  // const logOut = useLoginStore((state) => state.logOut);

  // zustand는 state를 리턴한 값을 비교해서 리렌더링 하기 때문에 isLoggedIn을 쓰지 않더라도 state를 리턴하기에
  // 다른 곳에서 isLoggedIn이 바뀌더라도 해당 컴포넌트가 리렌더링 하게 됨
  // const { logIn, logOut} = useLoginStore(state => state)

  // 해당 방법도 리렌더링이 된다. 왜냐? 객체가 매번 새로 만들어지기 때문에
  //난 곧죽어도 구조분해를 쓰고싶다  = shallow로 내보낼 때 한번 감싸주면 된다.

  // 이 두 방법을 쓰는 이유? = 불필요한 리렌더링을 막기 위해
  const { logIn, logOut } = useLoginStore(
    useShallow((state) => ({
      logIn: state.logIn,
      logOut: state.logOut,
    }))
  );

  console.log("버튼 리렌더링");

  return (
    <div>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그아웃하기</button>
    </div>
  );
}

export default Button;
