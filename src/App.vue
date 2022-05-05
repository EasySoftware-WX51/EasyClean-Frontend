<template>
  <v-app>
    <v-card color="grey lighten-4" flatheight="200px" tile>
      <v-toolbar @click="drawer=!drawer" class="light-blue lighten-1">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>EasyClean</v-toolbar-title>
      </v-toolbar>
    </v-card>

    <v-navigation-drawer app v-model="drawer" temporary >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            EasyClean
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-layout mt-4 column align-center>
        <router-link to="/">Home</router-link>
        <router-link to="/profile">Profile</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/service">Service</router-link>
      </v-layout>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: false
  }),
};
</script>
