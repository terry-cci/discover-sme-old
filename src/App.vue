<template>
  <v-app>
    <v-app-bar app color="primary" dark height="45" fixed>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="http://via.placeholder.com/100"
          transition="scale-transition"
          width="30"
        />
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main class="secondary">
      <router-view />
    </v-main>

    <v-footer app dark dense height="23" color="#91998C" class="py-0">
      <v-spacer></v-spacer>
      <small>&copy; TerryCCI, {{ new Date().getFullYear() }}</small>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
.w-100 {
  width: 100%;
}
</style>
