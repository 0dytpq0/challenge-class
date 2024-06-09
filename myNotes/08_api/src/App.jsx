import { useEffect } from "react";
import "./App.css";

const GET_PRODUCT_ENDPOINT =
  "https://api.ballang.yoojinyoung.com/products/9587059";

const GET_BRANDS_ENDPOINT = "https://api.ballang.yoojinyoung.com/brands";

// 반복되는 url = BASEURL이다.

function App() {
  useEffect(() => {
    // json = 형식이 갖춰진 문자열 -> js 객체로 쓰고싶다면 parse해야지
    (async () => {
      // 페치는 인자 두개, 두번째는 옵션

      const response = await fetch(GET_PRODUCT_ENDPOINT, { method: "POST" });

      const data = await response.json();
      //.json => josn.parse() , 비동기임
    })();
    // fetch(GET_PRODUCT_ENDPOINT).then((response) => console.log(response));
  }, []);

  return <main>Hello World</main>;
}

export default App;
