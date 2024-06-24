import { PropsWithChildren } from "react";

// 여기저기서 쓸만한 함수를 만들어놓는 것 -> 유틸리티 펑션 , 여기저기서 쓸만한 타입을 만들어 놓는것 -> 유틸리티 타입
// 만들기 귀찮지? 칠드런은 우리가 만들어놨어!! PropsWithChildren
// type VeryUsefulType<T> = T & { children: React.ReactNode };

// 그냥 외워 children 타입은 ReactNode다.
// 지저분해? 타입 별칭을 지정해준다, 컨벤션은 컴포넌트 + props
// 프롭스는 보통 interface
interface CounterButtonProps {
  onClick: () => void;
}

// children만 받아? 매개변수 빼고 generic하지않게 children이랑 propswithChilren만 이어주면 된다.
function CounterButton({
  onClick: handleClick,
  children,
}: PropsWithChildren<CounterButtonProps>) {
  return <button onClick={handleClick}>{children}</button>;
}

export default CounterButton;
