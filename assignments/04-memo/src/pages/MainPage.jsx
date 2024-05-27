import MemoEditor from "../components/MemoEditor";
import MemoList from "../components/MemoList";
import AppWrapper from "../components/Wrapper/AppWrapper";

function MainPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Form /> */}
      <AppWrapper>
        <MemoList />
        <MemoEditor />
      </AppWrapper>
    </div>
  );
}

export default MainPage;
