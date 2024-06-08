class BrandsAPI {
  #client;

  constructor(client) {
    this.#client = client;
  }

  // endpoint라고 부름 도착점 ㅇㅇ
  async getBrands() {
    const response = await this.#client.get("/brands");
    const data = response.data;
    const result = data.result;

    return result;
  }
}

export default BrandsAPI;
