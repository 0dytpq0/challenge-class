import { useEffect, useState } from "react";
import "./pikachu.css";

function Pikachu() {
  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const handlePikachuMove = (event) => {
      switch (event.key) {
        case "ArrowUp":
          event.preventDefault();
          setLocationY((prevY) => Math.max(prevY - 30, 0));
          break;
        case "ArrowDown":
          event.preventDefault();

          setLocationY((prevY) => Math.min(prevY + 30, 300));

          break;
        case "ArrowLeft":
          event.preventDefault();
          setLocationX((prevX) => Math.max(prevX - 30, 0));
          break;
        case "ArrowRight":
          event.preventDefault();
          setLocationX((prevX) => Math.min(prevX + 30, 300));
          break;
        case " ":
          event.preventDefault();
          if (!isJumping) {
            setIsJumping(true);
            setTimeout(() => setIsJumping(false), 500);
          }
          break;
      }
    };

    window.addEventListener("keydown", handlePikachuMove);

    return () => {
      window.removeEventListener("keydown", handlePikachuMove);
    };
  });

  return (
    <div id="Grass">
      <div
        id="Pikachu"
        className={isJumping ? "jumping" : ""}
        style={{
          "--x": `${locationX}px`,
          "--y": `${locationY}px`,
          transform: `translate(${locationX}px, ${locationY}px)`,
        }}
      ></div>
    </div>
  );
}

export default Pikachu;
