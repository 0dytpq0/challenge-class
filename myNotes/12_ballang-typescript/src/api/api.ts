import axios, { AxiosInstance } from "axios";
import AuthAPI from "./auth.api";
import BrandsAPI from "./brands.api";
import CartAPI from "./cart.api";
import ProductsAPI from "./products.api";

const BASE_URL = "https://api.ballang.yoojinyoung.com";

class API {
  private axios: AxiosInstance;

  auth;
  brands;
  cart;
  products;

  constructor() {
    this.axios = axios.create({ baseURL: BASE_URL, withCredentials: true });

    this.auth = new AuthAPI(this.axios);
    this.brands = new BrandsAPI();
    this.cart = new CartAPI(this.axios);
    this.products = new ProductsAPI(this.axios);
  }

  // 쿠키로 하면 바디에 제이슨으로 넘어오는게 아니라 쿠키가 왔다 갔다 하기 때문에 피료 없음
  setAccessToken(accessToken: string) {
    this.axios.defaults.headers.common.Authorization = accessToken
      ? `Bearer ${accessToken}`
      : "";
  }
}

const api = new API();

export default api;
