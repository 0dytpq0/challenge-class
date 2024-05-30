import { useForm } from "../../contexts/form.context";
import { useModal } from "../../contexts/modal.context";

function Button({ type }) {
  const modal = useModal();
  const FormData = useForm();
  const handleClickButton = (e) => {
    e.preventDefault();
    modal.open({
      title: FormData.formTitle,
      content: FormData.formContent,
      timer: FormData.formTimer,
    });
  };

  return (
    <button type={type} onClick={handleClickButton}>
      토스트 띄우기
    </button>
  );
}

export default Button;
