<template>
  <v-app>
    <AppBarMenu />

    <v-main class="secondary">
      <router-view />
    </v-main>

    <v-footer app dark dense height="23" color="#91998C" class="py-0" absolute>
      <v-spacer></v-spacer>
      <small>&copy; TerryCCI, {{ new Date().getFullYear() }}</small>
    </v-footer>
  </v-app>
</template>

<script>
import AppBarMenu from "@/components/AppBarMenu";

export default {
  name: "App",

  components: {
    AppBarMenu
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
