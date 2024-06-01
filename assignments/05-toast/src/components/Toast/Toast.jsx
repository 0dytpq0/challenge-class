import { useEffect, useState } from 'react';
import { useToast } from '../../contexts/toast.context';

//use effect로 ~초 후 false를 리턴해주는 값을 넣어
// 해당 값이 false가 되면 animate-slideIn은 animate-sildeOut이 되는거임.

function Toast({ title, content, timer }) {
  const [isTrue, setIsTrue] = useState(false);
  useEffect(() => {
    setTimeout(() => {}, timer);
  }, []);
  const toast = useToast();
  return (
    <div className={toastContainer}>
      <article className={articleStyle}>
        <h6 className={titleStyle}>{title}</h6>
        <p className={contentStyle}>{content}</p>
        <button onClick={() => toast.close()}>닫기</button>
      </article>
    </div>
  );
}

const toastContainer = `w-96 h-28 p-5 ${
  isTrue ? 'animate-slideOut' : 'animate-slideIn'
} border-2 border-gray-300 rounded-lg fixed bottom-10 right-10`;
const articleStyle = `flex flex-col h-full`;
const titleStyle = `h-1/3 font-bold mb-2 text-xl`;
const contentStyle = `h-1/3 text-xl  `;

export default Toast;
