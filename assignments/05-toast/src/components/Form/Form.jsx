import { useForm } from "../../contexts/form.context";
import ModalProvider from "../../contexts/modal.context";
import Button from "../Button/Button";

function Form() {
  const formData = useForm();
  console.log("formn 렌더링");

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="input-title">제목 (필수)</label>
        <input
          value={formData.formTitle}
          onChange={(e) => {
            formData.setTitle(e);
          }}
          id="input-title"
          placeholder="Scheduled: Catch up"
        />
        <label htmlFor="input-content">내용 (필수)</label>
        <input
          value={formData.formContent}
          onChange={(e) => formData.setContent(e)}
          id="input-content"
          placeholder="날짜"
        />
        <label htmlFor="input-timer">노출 시간(ms) (선택)</label>
        <input
          value={formData.formTimer}
          onChange={(e) => {
            formData.setTimer(e);
          }}
          id="input-timer"
          placeholder="2000"
        />
        <ModalProvider>
          <Button type="submit">토스트 띄우기</Button>
        </ModalProvider>
      </form>
    </div>
  );
}

export default Form;
