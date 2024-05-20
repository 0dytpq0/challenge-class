import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import PostDetailPage from "../pages/PostDetailPage";
import postDetailPageLoader from "../pages/PostDetailPage/PostDetailPage.loader";
import PostsListPage from "../pages/PostsListPage";
import postsListPageLoader from "../pages/PostsListPage/PostsListPage.loader";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "posts",
        element: <PostsListPage />,
        //  이 페이지가 시작될 때 해당 작업을 해줘! => 렌더링 전에 데이터를 호출해서 받아논다.
        loader: postsListPageLoader,
      },
      {
        path: "/posts/:postId", // :postId(ex, :1 , :2) is a dynamic parameter -> 동적 라우터
        element: <PostDetailPage />, // id는 어떻게 가져와? useParams() 사용 - postDetailpage에 있음
        // loader는 데이터를 받아오는 시점을 앞당겨줄 뿐이지 빨라지진않아서 느리긴하다.
        // 위의 사항을 해결하고싶다면 Await 컴포넌트를 공부해서 쓴다면 된다.
        loader: postDetailPageLoader,
      },
    ],
  },
]);

export default router;
