<template>
  <div>
    <v-sheet
      v-if="subNavigationBarVal && showSubNav"
      :color="backgroundColorVal"
      class="c-navigation__sub-navigation"
    >
      <nav
        :style="subNavStyle"
        class="d-flex justify-space-between align-center"
        :class="breakpoint.mdAndUp ? 'mx-auto' : 'flex-column'"
      >
        <div class="d-flex align-center justify-space-between py-2">
          <template
            v-for="navItem in subNavigationBarVal.navItems.filter(
              (e) => e.component != 'socialLinks'
            )"
            :key="navItem.i"
          >
            <nuxt-link
              v-if="navItem.externalLink"
              :href="navItem.url"
              target="_blank"
              class="c-navigation__sub-navigation__link text-grey-darken-2 mx-3"
              :class="navTextColor"
            >
              <v-icon class="pr-3" v-if="navItem.icon">{{
                navItem.icon
              }}</v-icon>
              {{ navItem.linkText }}
            </nuxt-link>
            <nuxt-link
              v-else
              :to="navItem.url"
              class="c-navigation__sub-navigation__link text-grey-darken-2 mx-3"
              :class="navTextColor"
            >
              <v-icon class="pr-3" v-if="navItem.icon">
                {{ navItem.icon }}
              </v-icon>
              {{ navItem.linkText }}
            </nuxt-link>
          </template>
        </div>
        <div class="ml-auto">
          <template
            v-for="navItem in subNavigationBarVal.navItems"
            :key="navItem.i"
          >
            <nuxt-link
              v-if="navItem.component == 'socialLinks'"
              :href="navItem.url"
              target="_blank"
              :class="breakpoint.mdAndUp ? '' : 'mx-2'"
            >
              <v-icon
                :size="topNavigationVal.size"
                :color="iconColor(navItem.color[0])"
              >
                {{ navItem.value }}
              </v-icon>
            </nuxt-link>
          </template>
        </div>
      </nav>
    </v-sheet>
    <v-sheet v-if="topNavigationVal" :color="backgroundColorVal">
      <nav class="py-2 mx-auto">
        <v-row align="center" justify="space-between">
          <v-col
            v-if="
              topNavigationVal &&
              topNavigationVal.logo &&
              topNavigationVal.logo.filename
            "
            class="d-flex justify-center align-center"
            cols="12"
            md="4"
          >
            <a href="/">
              <v-img
                v-if="topNavigationVal.logo.filename"
                :src="topNavigationVal.logo.filename"
                width="400"
                to="/"
              >
              </v-img>
            </a>
            <v-app-bar-nav-icon
              v-if="navigationDrawerVal && breakpoint.smAndDown"
              variant="text"
              @click.stop="drawer = !drawer"
              class="ml-3"
            />
          </v-col>
          <v-col
            v-if="
              topNavigationVal.socialLinks &&
              topNavigationVal.socialLinks.length > 0
            "
            class="d-flex justify-end align-center"
          >
            <nuxt-link
              v-for="icon in topNavigationVal.socialLinks"
              :key="icon.i"
              :href="icon.url"
              target="_blank"
            >
              <v-icon
                :size="topNavigationVal.socialIconSize"
                :color="iconColor(icon.color[0])"
              >
                {{ icon.value }}
              </v-icon>
            </nuxt-link>
          </v-col>
          <v-col
            cols="auto"
            class="pr-0"
            v-if="topNavigationVal.navItems && breakpoint.mdAndUp"
          >
            <v-list class="d-flex">
              <template
                v-for="navItem in topNavigationVal.navItems"
                :key="navItem.i"
              >
                <v-list-item
                  v-if="!navItem?.menuTitle && navItem?.linkText"
                  :to="navItem?.url"
                  active-class="text-primary active bg-white"
                  variant="plain"
                >
                  {{ navItem.linkText }}
                </v-list-item>
                <v-menu v-else submenu open-on-hover>
                  <template v-slot:activator="{ props }">
                    <v-list-item
                      color="primary"
                      class="clickable text-black"
                      active-class="text-primary active bdg-white"
                      v-bind="props"
                      v-if="navItem?.menuTitle"
                      :to="navItem?.url"
                      :ripple="false"
                      variant="plain"
                    >
                      {{ navItem.menuTitle }}
                    </v-list-item>
                  </template>
                  <v-list class="py-0">
                    <v-list-item
                      v-for="item in navItem.navItems"
                      :key="item.i"
                      link
                      class="py-0"
                      :to="!item.externalLink && item.url"
                      :href="item.url"
                      :ripple="false"
                    >
                      <v-list-item-title>
                        {{ item.menuTitle }}
                      </v-list-item-title>
                      <template v-slot:append>
                        <v-icon
                          v-if="item.navItems && item.navItems.length > 0"
                          icon="mdi-menu-right"
                          size="x-small"
                        ></v-icon>
                      </template>

                      <v-menu
                        :open-on-focus="false"
                        activator="parent"
                        open-on-hover
                        submenu
                        offset-x
                        location="right"
                      >
                        <v-list class="py-0">
                          <v-list-item
                            v-for="subItem in item.navItems"
                            :key="subItem.i"
                            link
                            :to="!subItem.externalLink && subItem.url"
                            :href="subItem.url"
                            active-class="text-primary active bg-white"
                            :ripple="false"
                            variant="plain"
                          >
                            <v-list-item-title>
                              {{ subItem.linkText }}
                            </v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-list>
          </v-col>
        </v-row>
      </nav>
    </v-sheet>

    <v-navigation-drawer
      v-model="drawer"
      v-if="navigationDrawer"
      temporary
      class="c-navigation__drawer"
    >
      <v-list class="c-navigation__drawer-list py-0">
        <v-list-item
          v-for="item in navigationDrawer[0].navItems"
          :key="item.i"
          :to="item.url"
          :value="item.linkText"
          class="c-navigation__drawer-list-item"
        >
          <v-list-item-title>
            {{ item.linkText }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import breakpoint from "~/mixin/breakpoint";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  props: {
    topNavigation: {
      type: Array,
      default: () => [],
    },
    navigationDrawer: {
      type: Array,
      default: () => [],
    },
    subNavigationBar: {
      type: Array,
      default: () => [],
    },
    backgroundColor: {
      type: Array,
      default: () => [],
    },
    textColor: {
      type: Array,
      default: () => [],
    },
  },
  mixins: [breakpoint],
  computed: {
    topNavigationVal() {
      let result = null;
      const topNavigation = this.topNavigation;
      if (topNavigation && topNavigation.length > 0) {
        result = topNavigation[0];
      }
      return result;
    },
    navigationDrawerVal() {
      let result = null;
      const navigationDrawer = this.navigationDrawer;
      if (navigationDrawer && navigationDrawer.length > 0) {
        result = navigationDrawer[0];
      }
      return result;
    },
    subNavigationBarVal() {
      let result = null;
      const subNavigationBar = this.subNavigationBar;
      if (subNavigationBar && subNavigationBar.length > 0) {
        result = subNavigationBar[0];
      }
      return result;
    },
    backgroundColorVal() {
      console.log("testing", this.topNavigationVal);
      let result = "white";
      const backgroundColor = this.backgroundColor;
      if (backgroundColor && backgroundColor.length > 0) {
        let color = backgroundColor[0];
        result = color.themeColor;
      }
      return result;
    },
    navTextColor() {
      let result = [];
      const textColor = this.textColor;
      const breakpoint = this.breakpoint;
      let color;
      if (textColor && textColor.length > 0) {
        color = textColor[0];
      }
      if (color && color.themeColor != "") {
        result.push(
          color.colorAdjustment != ""
            ? `text-${color.themeColor}-${color.colorAdjustment}`
            : `text-${color.themeColor}`
        );
      } else if (color && color.customColor.value != "") {
        result.push(color.customColor.value);
      }
      if (breakpoint.smAndDown) {
        result.push("text-subtitle-2");
      }
      return result;
    },
    subNavStyle() {
      let result = [];
      const subNavigationBar = this.subNavigationBar;
      if (subNavigationBar.maxWidth) {
        result.push({ width: subNavigationBar.maxWidth });
      }
      return result;
    },
    showSubNav() {
      let result = true;
      const subNavigationBar = this.subNavigationBar;
      const breakpoint = this.breakpoint;
      if (
        subNavigationBar &&
        subNavigationBar.hideOnMobile &&
        breakpoint.smAndDown
      ) {
        result = false;
      } else if (
        subNavigationBar &&
        subNavigationBar.hideOnTablet &&
        breakpoint.md
      ) {
        return false;
      }
      return result;
    },
  },
  methods: {
    iconColor(color) {
      let result = "";
      if (color && color.themeColor != "") {
        result =
          color.colorAdjustment != ""
            ? `${color.themeColor}-${color.colorAdjustment}`
            : color.themeColor;
      } else if (color && color.customColor.value != "") {
        result = color.customColor.value;
      }
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
.c-navigation {
  &__drawer {
    &-list {
      &-item {
        border-top: solid rgb(196, 196, 196) 0.25px;
      }
    }
  }

  &__sub-navigation {
    &__link {
      text-decoration: none;
    }
  }

  &__top-navigation {
    &__link {
      text-decoration: none;
    }
  }
}

ul {
  list-style: none;
}

nav {
  max-width: 1200px;
}
</style>
