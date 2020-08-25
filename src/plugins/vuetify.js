import Vue from "vue";
import Vuetify from "vuetify/lib";
import zhHant from "vuetify/es5/locale/zh-Hant";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#24c59b",
        secondary: "#DFDFD1",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#6D7CCF",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  lang: {
    locales: { zhHant },
    current: "zh-Hant"
  }
});
