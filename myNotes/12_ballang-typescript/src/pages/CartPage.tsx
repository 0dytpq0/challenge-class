import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

function CartPage() {
  const queryClient = useQueryClient();

  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => api.cart.getCart(),
  });

  const { mutateAsync: removeItemFromCart } = useMutation<
    unknown,
    Error,
    number
  >({
    mutationFn: (productId) => api.cart.removeItemFromCart(productId),
  });
  // 제거하면 상태를 업데이트 해줘야하는데 react query에서는 기존 상태를 무효화하기로 실행한다.
  const handleClickRemoveItemFromCart = (productId: number) => async () => {
    //장바구니 제거하는 로직

    await removeItemFromCart(productId);
    alert("상품이 장바구니에 제거되었습니다.");

    // filter해줌 : 너가 빼ㅔ고싶은걸 말해라
    // ["cart", sortedBy:"blabla"}]일 수도 있음
    // 배열로 만들어놨으니 리액트 쿼리가 똑똑하게 알아서 분리해서 작업함.
    // 고로 cart만 적어도 무효화해줌 그런데! cart만 바꾸고 sortedBy만 바꾸고싶어? => exact옵션을 추가해야함

    //서버랑 너무 자주 통신하는 거 아닌가요?
    // 요즘엔 react-query방식이 더 많이 쓰임 ㅇㅇ
    queryClient.invalidateQueries({ queryKey: ["cart"] });
  };

  return (
    <div>
      <h1>장바구니</h1>

      {isLoading ? (
        `loading....`
      ) : (
        <ul style={{ textAlign: "left" }}>
          {cart.items.map((cartItem) => (
            <li key={cartItem.id}>
              <h5>{cartItem.product.name}</h5>
              <span>[{cartItem.quantity}개]</span>
              <button
                onClick={handleClickRemoveItemFromCart(cartItem.product.id)}
              >
                장바구니에서 빼기
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
