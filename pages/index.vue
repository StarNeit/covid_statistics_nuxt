<template>
  <div>
    <v-row class="mt-3">
      <v-col cols="4">
        <h2>Total case: {{ state.total.cases }}</h2>
      </v-col>
      <v-divider vertical />
      <v-col cols="4">
        <h2>Total recovered: {{ state.total.recovered }}</h2>
      </v-col>
      <v-divider vertical />
      <v-col cols="4">
        <h2>Total deaths: {{ state.total.deaths }}</h2>
      </v-col>
    </v-row>
    <v-row class="my-6">
      <v-col cols="3">
        <DashboardCard
          title="New Case"
          color="lime lighten-2"
          :value="state.cases"
        />
      </v-col>
      <v-col cols="3">
        <DashboardCard
          title="Recovered"
          color="green lighten-2"
          :value="state.recovered"
        />
      </v-col>
      <v-col cols="3">
        <DashboardCard
          title="Deaths"
          color="deep-orange lighten-2"
          :value="state.deaths"
        />
      </v-col>
      <v-col cols="3">
        <DashboardCard
          title="Active"
          color="cyan lighten-2"
          :value="state.active"
        />
      </v-col>
    </v-row>

    <v-divider />

    <DataTable />
  </div>
</template>
<script>
import DashboardCard from '~/components/DashboardCard';
import DataTable from '~/components/DataTable';

export default {
  components: {
    DashboardCard,
    DataTable,
  },
  layout: 'default',
  computed: {
    state() {
      return this.$store.state.dashboard;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('dashboard/getAll');
      this.$store.dispatch('dashboard/getCountries');
    })
  }
}
</script>
