<template>
  <v-app>
    <v-toolbar elevation="1">
      <h1 class="display-2 font-weight-bold">COVID 19</h1>
    </v-toolbar>

    <v-main>
      <v-container>
        <transition name="layout" mode='out-in'>
          <nuxt />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
.v-sheet {
  max-height: 64px;
}
</style>
