<template>
  <v-app-bar
    app
    color="primary"
    dark
    hide-on-scroll
    :class="{ 'menu-opened': menuOpened }"
  >
    <v-btn icon @click="toggleMenu" id="nav-icon">
      <v-icon>mdi-menu</v-icon>
      <v-icon>mdi-close</v-icon>
    </v-btn>

    <div class="d-flex flex-grow-1" id="menu-container">
      <v-btn
        v-for="(option, i) in menuOptions"
        :key="i"
        rounded
        color="accent"
        elevation="1"
        class="mx-1 flex-grow-1"
      >
        {{ option.text }}
      </v-btn>
    </div>

    <!-- <v-spacer></v-spacer> -->

    <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBarMenu",
  data: () => ({
    menuOpened: false,
    menuOptions: [
      {
        text: "中小企分享"
      },
      {
        text: "中小企目錄"
      }
    ]
  }),
  methods: {
    toggleMenu() {
      this.menuOpened = !this.menuOpened;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-app-bar {
  #nav-icon {
    // using opacity for applying transition

    &::after {
      content: "MENU";

      font-size: 50%;

      opacity: 0.65;

      position: absolute;
      top: calc(50% - 0.5em + 24px / 2 - 3px);
      // the icon is fixed at 24px, -3px for adjusting
    }

    .v-icon {
      position: absolute;
    }

    .mdi-close {
      opacity: 0;
    }
  }

  &.menu-opened {
    #nav-icon {
      &::after {
        opacity: 0;
      }

      .mdi-menu {
        opacity: 0;
      }

      .mdi-close {
        opacity: unset;
      }
    }
  }

  /* - - - - - - - - - - - - - - - - - - - - - - - - - */

  #menu-container {
    transition: 0.3s;

    opacity: 0;
    transform: translateX(-100%);
    z-index: -99; // prevent blocking the menu btn

    .v-btn {
      height: 2em;
    }
  }

  &.menu-opened {
    #menu-container {
      opacity: unset;
      transform: unset;
      z-index: unset;
    }
  }
}
</style>
