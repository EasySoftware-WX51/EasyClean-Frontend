<template>
  <v-app>
    <v-card color="grey lighten-4" flatheight="200px" tile>
      <v-toolbar @click="drawer=!drawer" class="light-blue darken-4">
        <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
        <v-toolbar-title class="white--text">EasyClean</v-toolbar-title>
      </v-toolbar>
    </v-card>

    <v-navigation-drawer color="light-blue darken-4" app v-model="drawer" temporary >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 white--text">
            EasyClean
          </v-list-item-title>
          <v-list-item-subtitle class="white--text">
            Assured quality
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-layout column>
        <v-flex mt-3>
          <v-col>
            <v-btn block :to="{name: 'home'}">Home</v-btn>
          </v-col>

          <v-col>
            <v-btn block :to="{name: 'profile'}">Profile</v-btn>
          </v-col>

          <v-col>
            <v-btn block :to="{name: 'service'}">Service</v-btn>
          </v-col>

          <v-col>
            <v-btn block>Logout</v-btn>
          </v-col>

        </v-flex>
      </v-layout>

    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
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
