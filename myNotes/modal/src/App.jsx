import "./App.css";
import { useModal } from "./contexts/modal.context";
import "./custom.css";

function App() {
  const modal = useModal();

  const handleClickButton = () => {
    modal.open({ title: "샘플 모달", content: "샘플 컨텐츠" });
  };

  console.log();

  return (
    // fixed는 눈에 보이는 화면을 기준으로 고정
    // backdrop 넣는법 = 부모한테 background : 'rgba(0,0,0,0.2)' position : fixed top : 0 , bottom : 0, left : 0 , right: 0
    <main>
      <button onClick={handleClickButton}>모달 띄우기</button>
      {Array(5000)
        .fill(0)
        .map((_, idx) => (
          <div key={idx}>{idx + 1}</div>
        ))}
    </main>
  );
}

export default App;
