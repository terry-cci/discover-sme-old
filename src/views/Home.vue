<template>
  <v-container fluid class="pa-0">
    <!-- <div class="d-flex flex-column h-100"> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <v-row no-gutters>
      <v-col cols="12">
        <TitleCarousel />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <TopSmeList />
      </v-col>
      <v-col cols="12">
        <!-- <div class="secondary flex-grow-1"> -->
        <v-card class="ma-1 accent" dark>
          <v-card-title>中小企業?</v-card-title>

          <v-card-text>
            <p>
              中小企業，是指在經營規模上較小的企業，僱用人數與營業額皆不大。
            </p>
            <p>
              中小企業在本澳經濟中佔有舉足輕重的地位，對經濟發展及就業貢獻良多。
            </p>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn text outlined>了解更多 >></v-btn>
          </v-card-actions>
        </v-card>
        <!-- </div> -->
      </v-col>
    </v-row>
    <!-- </div> -->
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import TitleCarousel from "@/components/home/TitleCarousel.vue";
import TopSmeList from "@/components/home/TopSmeList.vue";

export default {
  name: "Home",
  components: {
    TitleCarousel,
    TopSmeList
  }
};
</script>
