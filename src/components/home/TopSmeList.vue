<template>
  <v-card class="ma-1" elevation="5">
    <div class="hot-tag">HOT!</div>

    <v-card-title class="justify-center">熱門中小企</v-card-title>

    <v-card-text>
      <v-list outlined class="py-0">
        <v-list-item-group>
          <template v-for="(sme, i) in top3Smes">
            <v-list-item :key="i">
              <v-list-item-icon class="ml-n2 mr-4 justify-center">
                <v-icon color="#ffb100" v-if="i === 0">mdi-crown</v-icon>
                <span v-else class="subtitle-2">{{ i + 1 }}. </span>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ sme.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="`divider-${i}`" v-if="i < top3Smes.length - 1" />
          </template>
        </v-list-item-group>
      </v-list>
    </v-card-text>

    <v-card-actions class="mt-2">
      <v-btn class="mx-auto accent">查看中小企目錄</v-btn>
      <v-spacer />
    </v-card-actions>

    <v-img
      src="@/assets/buildings_without_cloud.png"
      id="decoration"
      width="min(55vw, 85vh)"
      transition="slide-y-reverse-transition"
    />
  </v-card>
</template>

<script>
export default {
  name: "TopSmeList",
  data: () => ({
    topSmes: [
      {
        name: "新爽爽豬肉丸美食"
      },
      {
        name: "雄興泰咖啡室"
      },
      {
        name: "大順行凍肉食品有限公司"
      }
    ]
  }),
  computed: {
    top3Smes: function() {
      return this.topSmes.slice(0, 3);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-list {
  border: dashed var(--v-accent-base);
}

.hot-tag {
  position: absolute;
  top: -3px;
  left: 1em;

  background-color: red;
  color: white;

  min-width: 4em;
  text-align: center;
  font-weight: bold;

  border-radius: inherit;
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

#decoration {
  position: absolute;

  right: -0%;
  bottom: -6px;
}
</style>
