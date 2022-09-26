<template>
  <div>
    <h2 class="mb-3">{{ country.country }}</h2>

    <v-simple-table>
      <template v-slot:default>
        <tbody>
        <tr
          v-for="item in detail"
          :key="item.name"
        >
          <td>{{ item[0] }}</td>
          <td>{{ item[1] }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'CountryInformation',
  props: {
    country: {
      type: Object,
    }
  },
  data() {
    return {
      data: this.country
    }
  },
  computed: {
    detail() {
      return Object.entries(this.country).filter((item) => !['updated', 'country', 'countryInfo'].includes(item[0]));
    }
  },
}
</script>
