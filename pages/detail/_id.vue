<template>
  <div>
    <v-row class="mt-6">
      <v-col cols="6" class="d-flex justify-end">
        <v-btn
          :disabled="!search"
          color="primary"
          class="mt-3"
          @click="compareWith()"
        >
          Compare with
        </v-btn>
      </v-col>
      <v-divider vertical />
      <v-col cols="3">
        <v-autocomplete
          v-model="search"
          :items="countries.map((item) => item.country)"
          persistent-hint
          label="Select country"
          prepend-icon="mdi-location"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <CountryInformation :country="selectedCountry" />
      </v-col>
      <v-divider vertical />
      <v-col v-if="comparedCountry" cols="6">
        <CountryInformation :country="comparedCountry" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CountryInformation from "~/components/CountryInformation";

export default {
  components: {
    CountryInformation,
  },
  data() {
    return {
      search: '',
      comparedCountry: null,
    }
  },
  computed: {
    selectedCountry() {
      return this.$store.state.detail.country;
    },
    countries() {
      return this.$store.state.detail.countries;
    },
  },
  mounted() {
    this.$store.dispatch('detail/getOneCountry', this.$route.params.id);
    this.$store.dispatch('detail/getCountries');
  },
  methods: {
    compareWith() {
      const selected = this.countries.find((item) => item.country === this.search);
      if (selected) {
        this.comparedCountry = selected;
      }
    },
  },
}
</script>
