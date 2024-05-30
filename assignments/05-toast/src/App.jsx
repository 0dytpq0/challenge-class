import "./App.css";
import Form from "./components/Form/Form";
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
