import { useEffect, useRef, useState } from "react";
import "./pikachu.css";

function Pikachu() {
  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [direction, setDirection] = useState("right");
  const grassRef = useRef(null);

  const handlePikachuMove = (event) => {
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        setLocationY((prev) => Math.max(prev - 30, 0));
        break;
      case "ArrowDown":
        event.preventDefault();
        setLocationY((prev) => Math.min(prev + 30, 270));

        break;
      case "ArrowLeft":
        event.preventDefault();
        setLocationX((prev) => Math.max(prev - 30, 0));
        setDirection("left");
        break;
      case "ArrowRight":
        event.preventDefault();
        setLocationX((prev) => Math.min(prev + 30, 270));
        setDirection("right");
        break;
      case " " || "Spacebar":
        event.preventDefault();
        if (!isJumping && locationY) {
          setIsJumping(true);
          setTimeout(() => setIsJumping(false), 1000);
        }
        break;
    }
  };
  useEffect(() => {
    grassRef.current.focus();
  }, [grassRef]);
  return (
    <div
      id="Grass"
      ref={grassRef}
      tabIndex={0} //tabIndex속성은 HTML요소에 포커스를 받을 수 있도록 설정한다.
      // 대부분의 브라우저는 키보드 이벤트를 수신할 수 없기에 설정함으로서 해다 요소가 포커스를 받을 수 있게되고, 키보드 이벤트를 정상적으로 수신 가능함.
      // 근데 뭔가 다른 방법이 있을 듯한 뭔가 이상함
      onKeyDown={handlePikachuMove}
      style={{ outline: "none" }}
    >
      <div
        id="Pikachu"
        className={`${isJumping ? "jumping" : ""}`}
        style={{
          transform: `translate(${locationX}px, ${locationY}px) rotateY(${
            direction === "left" ? 180 : 0
          }deg)`,
        }}
      ></div>
    </div>
  );
}

export default Pikachu;
