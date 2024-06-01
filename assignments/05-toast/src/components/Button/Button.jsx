import { v4 as uuid } from 'uuid';
import { useForm } from '../../contexts/form.context';
import { useToast } from '../../contexts/toast.context';

function Button({ type }) {
  const toast = useToast();
  const FormData = useForm();
  const handleClickButton = (e) => {
    e.preventDefault();
    //space를 넣어서 넣을때마다 + 30정도 해줘서 위로 올리고 아래 새로 추가하기
    toast.open({
      title: FormData.formTitle,
      content: FormData.formContent,
      timer: FormData.formTimer,
      id: uuid(),
      space: 0
    });
  };

  return (
    <button className={buttonStyle} type={type} onClick={handleClickButton}>
      토스트 띄우기
    </button>
  );
}

const buttonStyle = `w-full bg-black text-white h-14 rounded-lg`;

export default Button;
