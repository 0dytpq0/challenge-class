import { useEffect, useState } from 'react';
import { useToast } from '../../contexts/toast.context';

//use effect로 ~초 후 false를 리턴해주는 값을 넣어
// 해당 값이 false가 되면 animate-slideIn은 animate-sildeOut이 되는거임.

function Toast({ id, title, content, timer, space }) {
  const [isTrue, setIsTrue] = useState(false);
  console.log('space', space);
  useEffect(() => {
    setTimeout(() => setIsTrue(true), timer - 500);
  }, [timer]);
  const toast = useToast();
  return (
    <div key={id} className={`${toastContainer} ${isTrue ? 'animate-slideOut' : 'animate-slideIn'}`}>
      <article className={articleStyle}>
        <h6 className={titleStyle}>{title}</h6>
        <p className={contentStyle}>{content}</p>
        <button
          onClick={(e) => {
            e.preventDefault(), toast.close(id);
          }}
        >
          닫기
        </button>
      </article>
    </div>
  );
}

const toastContainer = `w-96 h-28 p-5 border-2 border-gray-300 rounded-lg fixed bottom-10 right-10`;
const articleStyle = `flex flex-col h-full`;
const titleStyle = `h-1/3 font-bold mb-2 text-xl`;
const contentStyle = `h-1/3 text-xl  `;

export default Toast;
