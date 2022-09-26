import service from '~/services'

export const state = () => ({
  cases: [],
  recovered: [],
  deaths: [],
  active: [],
  total: {
    cases: 0,
    recovered: 0,
    deaths: 0,
  },
  countries: {
    today: [],
    yesterday: [],
    twoDays: [],
  },
})

export const getters = {
  cases: (state) => state.cases,
  recovered: (state) => state.recovered,
  deaths: (state) => state.deaths,
  active: (state) => state.active,
  total: (state) => state.total,
  countries: (state) => state.countries,
}

export const mutations = {
  SET_ITEMS(state, items) {
    state.cases = items.cases;
    state.recovered = items.recovered;
    state.deaths = items.deaths;
    state.active = items.active;
  },
  SET_TOTAL(state, total) {
    state.total = total
  },
  SET_COUNTRIES(state, countries) {
    state.countries = countries
  },
}

export const actions = {
  async getAll(context) {
    const res = await Promise.all([
      service.getAll(),
      service.getAll({ yesterday: true }),
      service.getAll({ twoDaysAgo: true }),
    ]);

    const cases = res.map((item) => item.todayCases);
    const recovered = res.map((item) => item.todayRecovered);
    const deaths = res.map((item) => item.todayDeaths);
    const active = res.map((item) => item.active);

    context.commit('SET_ITEMS', {
      cases,
      recovered,
      deaths,
      active,
    });

    if (res[0]) {
      context.commit('SET_TOTAL', {
        cases: res[0].cases,
        recovered: res[0].recovered,
        deaths: res[0].deaths,
      });
    }
  },

  async getCountries(context) {
    const [ today, yesterday, twoDays ] = await Promise.all([
      service.getCountries(),
      service.getCountries({ yesterday: true }),
      service.getCountries({ twoDaysAgo: true }),
    ]);

    context.commit('SET_COUNTRIES', {
      today,
      yesterday,
      twoDays,
    });
  }
}
