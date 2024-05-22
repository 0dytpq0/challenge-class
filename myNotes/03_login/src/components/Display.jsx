import { useSelector } from "react-redux";

function Display() {
  // 구조분해로 하면 안됨 왜? 리덕스의 상태가 바껴도 state의 값이 바뀐거기에 리렌더링이되거든?
  // 구조분해하면 99개가 바뀔 때마다 리렌더링이 될거임
  // 안한다면 isLoggedIn이 바뀔때만 리렌더링됨.
  // const {auth: {isLoggedIn},} = useSelector((state)=>state)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const status = isLoggedIn ? "로그인" : "로그아웃";

  return (
    <div style={{ borderBottom: "1px solid black" }}>
      현재 {status} 상태입니다.
    </div>
  );
}

export default Display;
