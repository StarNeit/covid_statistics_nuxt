class Service {
  constructor($axios) {
    this.$axios = $axios
  }

  async getAll(params) {
    return await this.$axios
      .get('/all', { params })
      .then((res) => res.data)
      .catch((err) => err)
  }

  async getCountries(params) {
    return await this.$axios
      .get('/countries', { params })
      .then((res) => res.data)
      .catch((err) => err)
  }

  async getCountry(country) {
    return await this.$axios
      .get(`/countries/${country}`)
      .then((res) => res.data)
      .catch((err) => err)
  }
}

export default new Service()
