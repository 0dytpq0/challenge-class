import { useModal } from "../../contexts/modal.context";

function Modal({ title, content }) {
  const modal = useModal();
  console.log("title,content", title, content);
  return (
    <div>
      <article>
        <h6>{title}</h6>
        <p>{content}</p>
        <button onClick={() => modal.close()}>닫기</button>
      </article>
    </div>
  );
}

export default Modal;
