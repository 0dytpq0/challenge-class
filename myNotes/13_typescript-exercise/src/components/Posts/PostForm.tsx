import { DefaultError, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

function PostForm() {
  const titleElRef = useRef<HTMLInputElement>(null);
  const bodyElRef = useRef<HTMLTextAreaElement>(null);

  // jsonplaceholder 는 포스트가 안되는데 이를 optimistic 머시기인 선택구현사항에 그것을 이용하면 가능.
  const { mutateAsync: createPost } = useMutation<
    unknown,
    DefaultError,
    { title: string; body: string }
  >({
    mutationFn: (data) => axios.post(endpoint, data),
  });

  const handdleClickButton = async () => {
    const title = titleElRef.current?.value;
    const body = bodyElRef.current?.value;

    if (!title || !body) return alert("데이터를 잘 준비해 주세요");

    const data = { title, body };
    await createPost(data);
  };

  return (
    <div className="flex flex-col p-4">
      <input
        ref={titleElRef}
        className="border border-black"
        placeholder="제목"
      />
      <textarea
        ref={bodyElRef}
        className="border border-black"
        placeholder="내용"
      />
      <button onClick={handdleClickButton} className="border border-black">
        포스트생성하기
      </button>
    </div>
  );
}

export default PostForm;
