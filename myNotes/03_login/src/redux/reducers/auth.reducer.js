// 리듀서 = 공장 = 작업하는 곳 = 함수

// 리듀는 관습적으로 action type을 상수로 만들고 그 앞에 작업의 종류?를 붙여줌
export const LOG_IN = "auth/LOG_IN";
export const LOG_OUT = "auth/LOG_OUT";

// 작업을 하기 위해선 상태가 있어야함 = 초기값 필요
const initialState = {
  isLoggedIn: false,
};

// state = 바꿀 대상, action = 작업 명세서
function authReducer(prevState = initialState, action) {
  // OK 이제 작업을 하자!
  // 작업 종류에 따라서 다른 작업을 해야 해!

  switch (action.type) {
    //"작업종류1"
    case LOG_IN:
      // 뚝딱뚝딱
      // 작업이 다 반영된 상태를 리턴해 주면 됨
      return { ...prevState, isLoggedIn: true };
    // break;
    //"작업종류2"
    case LOG_OUT:
      // 뚝딱뚝딱
      // 작업이 다 반영된 상태를 리턴해 주면 됨
      return { ...prevState, isLoggedIn: false };
    // break;
    default:
      return prevState;
  }
}

export default authReducer;
