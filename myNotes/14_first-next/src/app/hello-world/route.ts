// routing handler 디렉토리 참고
// export async function GET(request) {
//   // api를 숨겨놓을거야..!
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();
//   return NextResponse.redirect("https://www.naver.com");
//   // return NextResponse.json(posts);
// }

// 쿠키는 클라이언트에서의 상태에도 유용하지만 매 요청마다 서버에 전달되는 값이잖아?
// MiddleWare가 있는데,
export async function GET(request) {
  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { "Set-Cookie": "hello=world" },
  });
}

export async function POST() {}

export async function DELETE() {}
