class ApiService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async getDados() {
    const resp = await fetch(this.endpoint);
    return await resp.json();
  }
}
