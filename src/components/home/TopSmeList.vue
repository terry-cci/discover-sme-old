<template>
  <v-card class="ma-1">
    <v-card-title class="justify-center">熱門中小企</v-card-title>

    <v-card-text>
      <v-list outlined rounded>
        <template v-for="(sme, i) in topSmes">
          <v-list-item :key="i">
            <v-list-item-icon class="ml-n2 mr-4 justify-center">
              <v-icon color="#ffb100" v-if="i === 0">mdi-crown</v-icon>
              <span v-else class="subtitle-2">{{ i + 1 }}. </span>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ sme.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="`divider-${i}`" v-if="i < topSmes.length - 1" />
        </template>
      </v-list>
    </v-card-text>
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
  })
};
</script>
