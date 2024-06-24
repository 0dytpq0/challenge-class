import { cookies } from "next/headers";

//서버에서 다뤄지는 로직 => 쿠키를 꺼낼 수 있다.
function HomePage() {
  const accessToken = cookies().get("accessToken")?.value;

  const isAccessTokenValid = !!accessToken;

  return (
    <div>
      {isAccessTokenValid ? <div>비밀 내용</div> : <div>공개 내용</div>}
    </div>
  );
}

export default HomePage;
