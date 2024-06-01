import { useForm } from '../../contexts/form.context';
import ToastProvider from '../../contexts/toast.context';
import Button from '../Button/Button';

function Form() {
  const formData = useForm();
  console.log('formn 렌더링');

  return (
    <div className={containerStyle}>
      <form className={formStyle}>
        <h1 className={title}>토스트 컨트롤러</h1>
        <div className={inputContainer}>
          <label className={labelStyle} htmlFor="input-title">
            제목 (필수)
          </label>
          <input
            className={inputStyle}
            value={formData.formTitle}
            onChange={(e) => {
              formData.setTitle(e);
            }}
            id="input-title"
            placeholder="Scheduled: Catch up"
          />
        </div>
        <div className={inputContainer}>
          <label className={labelStyle} htmlFor="input-content">
            내용 (필수)
          </label>
          <input
            className={inputStyle}
            value={formData.formContent}
            onChange={(e) => formData.setContent(e)}
            id="input-content"
            placeholder="날짜"
          />
        </div>
        <div className={inputContainer}>
          <label className={labelStyle} htmlFor="input-timer">
            노출 시간(ms) (선택)
          </label>
          <input
            className={inputStyle}
            value={formData.formTimer}
            onChange={(e) => {
              formData.setTimer(e);
            }}
            id="input-timer"
            placeholder="2000"
          />
        </div>
        <ToastProvider>
          <Button type="submit">토스트 띄우기</Button>
        </ToastProvider>
      </form>
    </div>
  );
}

const containerStyle = `flex justify-center items-center w-full h-screen`;

const formStyle = `w-full max-w-sm h-lg flex flex-col justify-center items-center`;

const inputContainer = `flex flex-col w-full h-20 m-3 justify-between`;

const title = `text-lg`;

const labelStyle = `h-1/6 mb-2`;

const inputStyle = `h-4/6 p-4 border border-gray-200 rounded-lg text-black placeholder-black `;

export default Form;
