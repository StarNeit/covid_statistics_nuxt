import service from '~/services'

export const state = () => ({
  country: {},
  countries: [],
})

export const getters = {
  country: (state) => state.cases,
  countries: (state) => state.recovered,
}

export const mutations = {
  SET_COUNTRY(state, country) {
    state.country = country;
  },
  SET_COUNTRIES(state, countries) {
    state.countries = countries
  },
}

export const actions = {
  async getOneCountry(context, country) {
    const res = await service.getCountry(country);

    context.commit('SET_COUNTRY', res);
  },

  async getCountries(context) {
    const countries = await service.getCountries();

    context.commit('SET_COUNTRIES', countries);
  }
}
