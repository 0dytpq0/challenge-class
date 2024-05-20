import { useLoaderData } from "react-router-dom";

function PostDetailPage() {
  // const params = useParams();
  const post = useLoaderData();
  return (
    <div>
      <h1>PostDetailPage</h1>
      <h2>{post.title}</h2>
    </div>
  );
}

export default PostDetailPage;
