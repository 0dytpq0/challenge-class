import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

function HomePage() {
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);

  //   async function init() {
  //     try {
  //       const products = await api.products.getProducts();
  //       setProducts(products);

  //       setIsSuccess(true);
  //     } catch {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   init();
  // }, []);
  // if (isLoading) return <Page>Loading...</Page>;
  // if (isError) return <Page>Error...</Page>;

  //필수 = {queryKey : 가져온 데이터를 어떤 키에다가 저장할 것인지,queryFn : 데이터를 가져오는 함수}
  // queryKey는 항상 배열로 만든다 <- tanstack 공식 홈페이지에서 꼭 요렇게 하라고 가이드 나옴
  // 첫번째 요소로는 항상 데이터의 모델명(정체성)을 string으로 넣는다 <- 매우 당연한 것
  // 쿼리키의 두 번째 요소로는 모델명을 설명하는 정보를 object로 넣는다. <- 일반적으로 이렇게함
  // {page:5, sortedBy : date}처럼 멀 기준으로 솔트되있다, 페이지는 5개다 등등 적어주는거임
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    // 쿼리 function자리에는 항상 비동기 함수(Promise)가 들어가야한다.
    // () =>로 감싸서 해라 ㅡㅡ
    // queryFn: () => api.products.getProducts(),
    queryFn: () => api.brands.getBrands(),
  });

  if (isLoading) return <Page>loading...</Page>;
  if (isError) return <Page>error....</Page>;

  return (
    <Page>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.nameKr}</Link>
          </li>
        ))}
      </ol>
    </Page>
  );
}

export default HomePage;
