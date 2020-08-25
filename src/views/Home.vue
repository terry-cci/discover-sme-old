<template>
  <v-container fluid class="pa-0">
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
        <v-card class="ma-1 info" dark>
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
            <v-btn text outlined>
              了解更多
              <v-icon right dark>mdi-information-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TitleCarousel from "@/components/home/TitleCarousel";
import TopSmeList from "@/components/home/TopSmeList";

export default {
  name: "Home",
  components: {
    TitleCarousel,
    TopSmeList
  }
};
</script>
