<template>
  <v-carousel
    cycle
    hide-delimiters
    touchless
    :show-arrows="false"
    height="max(60vh, 325px)"
  >
    <v-carousel-item
      v-for="photo in photos"
      :key="photo.src"
      :src="photo.src"
    />
    <!-- overlay -->
    <v-overlay absolute opacity="0.85" z-index="0">
      <div class="d-flex flex-column align-center pa-5">
        <h1>發現中小企!</h1>
        <span class="subtitle-1">穿梭於橫街窄巷間, 探索各式的店鋪!</span>
        <!-- - - - - - - - - - - - - - - - - - - - - - -->
        <v-divider dark class="w-100 my-6" />
        <small>找到了有趣的中小企?</small>
        <v-btn color="primary" class="mt-2" transition="scale-transition"
          >拍照分享</v-btn
        >
      </div>
    </v-overlay>
  </v-carousel>
</template>

<script>
export default {
  name: "TitleCarousel",
  data: () => ({
    photos: []
  }),
  components: {
    // HelloWorld
  },
  created: function() {
    let i = 0;
    let flag = true;
    while (flag) {
      try {
        this.photos.push({
          src: require(`@/assets/carousel/${i}.jpg`)
        });
      } catch (error) {
        flag = false;
      }
      i++;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-overlay {
  font-size: min(calc(95vw / 20), 5vh);
}
</style>
