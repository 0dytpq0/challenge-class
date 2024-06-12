import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function HomePage() {
  const navigate = useNavigate();
  const { data: products, isLoading } = useQuery({
    // 이 모델은 리스트다!
    queryKey: ["product", { list: true }],
    queryFn: () => api.products.getProducts(),
  });

  const { mutate: addItemToCart } = useMutation({
    mutationFn: (productId) => api.cart.addItemToCart(productId),
  });

  const handleClickAddItemToCart = (productId) => () => {
    //장바구니 추가하는 로직
    addItemToCart(productId, {
      onSuccess: () => {
        // yes는 boolean값인걸 컴퓨터는 알고 있다. -> confirm이 boolean을 리턴해주는 것을 컴퓨터는 알고있기 때문에 -> 타입 추론이 잘 되고있다.
        const yes = confirm(
          "상품이 장바구니에 잘 추가되었습니다. 장바구니로 갈까요?"
        );

        if (yes) navigate("/cart");
      },
    });
  };

  return (
    <div>
      <h1>HomePage</h1>
      {isLoading ? (
        `loading....`
      ) : (
        <ul style={{ textAlign: "left" }}>
          {products.map((product) => (
            <li key={product.id}>
              <h5>{product.name}</h5>
              <button onClick={handleClickAddItemToCart(product.id)}>
                장바구니에 추가하기
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
