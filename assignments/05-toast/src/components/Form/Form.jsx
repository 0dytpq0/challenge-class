import { useForm } from "../../contexts/form.context";

function Form() {
  const formData = useForm();
  console.log(formData);

  return <div></div>;
}

export default Form;
