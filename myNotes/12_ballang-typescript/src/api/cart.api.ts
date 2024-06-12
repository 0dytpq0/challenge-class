import { AxiosInstance } from "axios";
import { GetCartData } from "./cart.type";

class CartAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getCart() {
    const path = "/cart";

    const response = await this.axios.get<GetCartData>(path);
    // axios의 response.data에 해당 generic 타입이 할당된다.
    const result = response.data;

    return result;
  }

  async addItemToCart(productId: number) {
    const path = `/cart/products/${productId}`;

    const response = await this.axios.post(path);
    const result = response.data.result;

    return result;
  }

  async removeItemFromCart(productId: number) {
    const path = `/cart/products/${productId}`;

    const response = await this.axios.delete(path);
    const result = response.data.result;

    return result;
  }

  async clearItemInCart(productId: number) {
    const path = `/cart/products/${productId}/clear`;

    const response = await this.axios.delete(path);
    const result = response.data.result;

    return result;
  }
}

export default CartAPI;

// 타입을 generic하게 쓸때의 타입 꺽쇠의 위치는 아래와 같다.
// someValue를 리턴해주면 T타입을 리턴해주는 것과 같다.
// function testFunction<T>(someValue: T): T[] {

//   return [someValue, someValue];
// }

// a는 숫자의 배열, parameter가 문자열이면 ? a는 문자열 배열
// const a = testFunction(123);

//호출할 때 타입에 인자를 넣어줄 수 있음
// const a = testFunction<boolean>(true);

// function testFunction<T= unknown>(): {status : number; data : T} {
//   const a = 5 as unknown
//   return a;
// }

// const a = testFunction<boolean>();
