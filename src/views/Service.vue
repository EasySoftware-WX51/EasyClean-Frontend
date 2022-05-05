<template>
  <v-container grid-list-md>
    <h1 class="text-center">Services</h1>
    <v-divider></v-divider>
    <v-layout row wrap justify-center>
      <v-flex xs12 lg8 mt-5 v-for="(item,index) in arrayServices" :key="index">
        <v-img src="../assets/cleaning.png" height="500"></v-img>
        <v-card class="mt-5">
          <v-card-title >{{item.title}}</v-card-title>
          <v-card-text>
            <p>{{item.description}}</p>
            <v-btn color="success" class="mr-3"><router-link class="white--text text-decoration-none" to='/servicecompanies'>Request</router-link></v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      arrayServices:[
        {id:1,title: 'Cleaning', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.'},
        {id:2,title: 'Disinfection', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.'},
      ]
    }
  },
}
</script>
