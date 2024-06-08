import axios from "axios";
import BrandsAPI from "./brands.api";
import ProductsAPI from "./products.api";

const BASE_URL = "https://api.ballang.yoojinyoung.com/";

class API {
  #baseURL = BASE_URL;
  #client;

  products;

  constructor() {
    this.#client = axios.create({ baseURL: this.#baseURL });
    // 모듈화를 하고 싶었어!
    this.brands = new BrandsAPI(this.#client);
    this.products = new ProductsAPI(this.#client);
  }
}

const api = new API();

export default api;
