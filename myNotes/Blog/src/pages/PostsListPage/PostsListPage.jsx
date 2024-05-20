import { Link, useLoaderData } from "react-router-dom";

function PostsListPage() {
  //router.jsx에서 loader 키의 값을 전달해줌
  const posts = useLoaderData();
  // const [posts, setPosts] = useState([]);

  // 데이터를 불러와서 보여줄거야!
  // 언제?? 마운트 될 때, 가장 먼저 불러오면 좋겠죠

  // useEffect(() => {
  //데이터 불러오기 -> 그린다 -> 리렌더링 -> 프롭스도 없어?  state사용 해야지

  // useEffect의 인자에 async를 입힐 수 없다
  // fetchPosts 같은 함수로 만들어서 사용해도 된다.

  // async function fetchPosts() {
  //   const url = "https://jsonplaceholder.typicode.com/posts";
  //   const response = await fetch(url);
  //   const data = await response.json();

  //   console.log(data);
  //   setPosts(data);
  // }

  // fetchPosts();
  // }, []);

  return (
    <div>
      <h1>PostsListPage</h1>

      <ol>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default PostsListPage;
