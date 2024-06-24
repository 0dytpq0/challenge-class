import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

function Posts() {
  const { data: posts = [] } = useQuery<
    AxiosResponse<Post[]>,
    AxiosError,
    Post[]
  >({
    queryKey: ["posts"],
    queryFn: () => axios.get(endpoint),
    // select => queryFn에서 돌려준 데이터를 한번 더 가공해서 마지막 data로 돌려주는 함수
    // 위 타입의 첫번째 인자는 Fn의 반환값이니 AxiosResponse로 감싸주고 마지막 인자를 리턴 값에 대한 타입을 할당
    select: (res) => res.data,
  });

  return (
    <div>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}

export default Posts;
