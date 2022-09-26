<template>
  <div>
    <v-row class="d-flex justify-space-between mt-6 mb-6">
      <v-col cols="5">
        <v-text-field
          v-model="search"
          label="Search country"
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col cols="5" class="d-flex justify-end">
        <v-btn-toggle
          v-model="active"
          color="secondary"
          mandatory
        >
          <v-btn value="today" @click="changeActive('today')">Today</v-btn>
          <v-btn value="yesterday" @click="changeActive('yesterday')">Yesterday</v-btn>
          <v-btn value="twoDays" @click="changeActive('twoDays')">2 days ago</v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <v-data-table :headers="headers" :items="countries[active]">
      <template v-slot:[`item.action`]="{ item }">
        <v-icon
          small
          @click="goToDetail(item.country)"
        >
          mdi-eye
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  name: 'DataTable',
  data() {
    const headers = [
      {
        text: 'Country',
        align: 'start',
        sortable: true,
        value: 'country',
        filter: value => {
          if (!this.search) return true

          return value.toLowerCase().includes(this.search.toLowerCase());
        },
      },
      { text: 'Cases', value: 'cases' },
      { text: 'Today Cases', value: 'todayCases' },
      { text: 'Recovered', value: 'recovered' },
      { text: 'Today Recovered', value: 'todayRecovered' },
      { text: 'Deaths', value: 'deaths' },
      { text: 'Today Deaths', value: 'todayDeaths' },
      { text: 'Active', value: 'active' },
      { text: 'Actions', value: 'action', sortable: false }
    ];

    return {
      headers,
      active: 'today',
      search: '',
    }
  },
  computed: {
    countries() {
      return this.$store.state.dashboard.countries
    },
  },
  methods: {
    changeActive(value) {
      this.active = value;
    },
    goToDetail(country) {
      this.$router.push(`/detail/${country}`);
    },
  }
}
</script>
