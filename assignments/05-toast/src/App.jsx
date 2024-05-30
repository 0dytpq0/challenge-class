import { Form } from "react-router-dom";
import "./App.css";
import { FormProvider } from "./contexts/form.context";

function App() {
  return (
    <>
      <FormProvider>
        <Form />
      </FormProvider>
    </>
  );
}

export default App;
