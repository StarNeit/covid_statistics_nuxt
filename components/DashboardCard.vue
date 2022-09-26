<template>
  <v-card
    class="pa-5"
    :color="color"
    elevation="0"
  >
    <v-flex class="d-flex align-center">
      <v-icon x-large class="mr-2">
        mdi-account-group
      </v-icon>
      <h2>{{ title }}</h2>
    </v-flex>

    <h1 class="display-1 font-weight-bold">
      {{ value[active] }}
    </h1>

    <v-flex class="d-flex justify-end mt-8">
      <v-btn-toggle
        v-model="active"
        color="primary"
        mandatory
        group
      >
        <v-btn x-small :value="0" @click="changeActive(0)">Today</v-btn>
        <v-btn x-small :value="1" @click="changeActive(1)">Yesterday</v-btn>
        <v-btn x-small :value="2" @click="changeActive(2)">2 days ago</v-btn>
      </v-btn-toggle>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  name: 'DashboardCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    value: {
      type: Array,
    }
  },
  data() {
    return {
      active: 0,
    }
  },
  methods: {
    changeActive(value) {
      this.active = value;
    }
  }
}
</script>
