export default async function postDetailPageLoader({ params }) {
  const id = params.postId;
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
