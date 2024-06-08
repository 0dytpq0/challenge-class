import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import Page from "../components/Page";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

function TodoPage() {
  const inputRef = useRef(null);

  // mutationFn을 받는다
  const { isPending, mutate } = useMutation({
    mutationFn: (variables) => {
      return axios.post(ENDPOINT, { value: variables });
    },
    //mutate의 result가 아래 온다
    onSuccess: () => {
      alert("성공했어");
    },
    onError: () => {
      alert("실패했어!");
    },
  });

  const handleClickButton = async () => {
    mutate(inputRef.current.value, { onSuccess: () => alert("성공") });
  };

  return (
    <Page>
      <input
        type="text"
        ref={inputRef}
        className="border"
        disabled={isPending}
      ></input>
      <button onClick={handleClickButton} className="bg-black text-white">
        눌러주세요
      </button>
    </Page>
  );
}

export default TodoPage;
