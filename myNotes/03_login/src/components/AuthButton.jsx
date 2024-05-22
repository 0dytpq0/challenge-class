import { useDispatch, useSelector } from "react-redux";
import { LOG_IN, LOG_OUT } from "../redux/reducers/auth.reducer";

function AuthButton() {
  //우체부 등장
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleClickButton = () => {
    const action = { type: isLoggedIn ? LOG_OUT : LOG_IN };

    // 우체부야 지시명세서(액션)좀 전달해줘!
    dispatch(action);
  };

  return (
    <button onClick={handleClickButton}>
      {isLoggedIn ? "로그아웃하기" : "로그인하기"}
    </button>
  );
}

export default AuthButton;
