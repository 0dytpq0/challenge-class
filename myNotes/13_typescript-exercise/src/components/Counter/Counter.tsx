import { useState } from "react";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [unit, setUnit] = useState<number>(1);
  // setUnit으로 스트링을 넣어줘야 할 때도 있다! 이럴 땐 <number | string>으로 명시적으로 표현해줘야 한다.
  // 추론이 되더라도 명시적인게 좋다면 걍 넣어놔라 ㅇㅇ

  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };

  // 멀 지정해줘야 e가 자동으로 추론이 될까?
  // 1. 함수에 타입을 지정해주어서 프로퍼티가 추론될 수 있도록 한다.
  // const handleChangeUnit: (e: { target: { value: string } }) => void = (e) => {
  //   setUnit(Number(e.target.value));
  // };

  // 2. 인자에 타입을 주어서 함수의 타입이 추론될 수 있도록 한다.
  // const handleChangeUnit = (e: { target: { value: string } }) => {
  //   setUnit(Number(e.target.value));
  // };

  // 3. 실제론 위처럼 안하고 아래처럼 한다.
  // onClick에서 e에 마우스를 올려보면 타입이 나오거든? 그걸 복사해서 넣어
  // const handleChangeUnit = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUnit(Number(e.target.value));
  // };
  // 4. 실제로 하는거 두번째 방법 -> onChange에 마우스를 대봐 => 그럼 아래처럼 나오는데 그걸 함수에 타입을 할당 해줘
  const handleChangeUnit: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUnit(Number(e.target.value));
  };
  return (
    <div>
      <CounterDisplay value={count} />

      <input
        value={unit}
        onChange={handleChangeUnit}
        //input 값은 string인데 unit의 타입은 number임.
        type="number"
        placeholder="이곳에 숫자를 넣어라"
      />

      <div className="flex">
        <CounterButton onClick={decrement}>[-]</CounterButton>
        <CounterButton onClick={increment}>[+]</CounterButton>
      </div>
    </div>
  );
}

export default Counter;
