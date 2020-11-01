<template>
  <v-card>
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src=""></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Vue</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <!-- <router-link to="{{item.to}}"> -->
            <v-list-item-title>{{ item.title }}</v-list-item-title>

            <!-- </router-link> -->
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home", to: "/" },
        { title: "Contact", icon: "mdi-contacts", to: "/contact" },
      ],
      mini: true,
    };
  },
};
</script>

<style lang="css" scoped>
.v-list--dense .v-list-item .v-list-item__icon,
.v-list-item--dense .v-list-item__icon {
  margin-right: 32px;
}
</style>
