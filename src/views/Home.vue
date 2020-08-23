<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <TitleCarousel />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import TitleCarousel from "@/components/TitleCarousel.vue";

export default {
  name: "Home",
  components: {
    TitleCarousel
  }
};
</script>
