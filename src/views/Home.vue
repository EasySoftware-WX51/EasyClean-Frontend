<template>
  <v-container grid-list-md>
    <h1 class="text-center">Home</h1>
    <v-divider></v-divider>
    <v-layout row wrap justify-center>
      <v-flex xs12 lg8 mt-10>
        <v-card class="mb-10" v-for="(item,index) in arrayRequest" :key="index">
          <v-row>
            <v-col cols="12" sm="4">
              <v-img v-if="item.id==1" src="../assets/cleaning-company.jpeg" height="200" contain></v-img>
              <v-img v-if="item.id==2" src="../assets/cleaning-company2.jpeg" height="300" contain></v-img>
              <v-img v-if="item.id==3" src="../assets/cleaning-company3.jpeg" height="300" contain></v-img>
              <v-img v-if="item.id==4" src="../assets/cleaning-company4.jpeg" height="300" contain></v-img>
              <v-img v-if="item.id==5" src="../assets/cleaning-company5.jpeg" height="300" contain></v-img>
            </v-col>
            <v-col cols="12" sm="8">
              <v-card-title >{{item.title}} {{item.id}}</v-card-title>
              <v-card-text>
                <p>{{item.description}}</p>
                <v-btn color="success" @click="payRequest()" class="mr-3">Pay</v-btn>
                <v-btn color="error" @click="deleteRequest(index)">Cancel</v-btn>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar v-model="snackbar">
      {{ mensaje }}
      <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      arrayRequest:[
        {id:1,title:'Request', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse sit quae blanditiis accusantium commodi tenetur natus magnam officiis reiciendis, optio est. Doloremque maxime hic deserunt alias voluptatem similique! Praesentium. Tempore esse sit quae blanditiis accusantium commodi tenetur natus magnam officiis reiciendis, optio est. Doloremque maxime hic deserunt alias voluptatem similique! Praesentium. Tempore esse sit quae blanditiis accusantium commodi tenetur natus magnam officiis reiciendis, optio est. Doloremque maxime hic deserunt alias voluptatem similique! Praesentium.'},
        {id:2,title:'Request', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse sit quae blanditiis accusantium commodi tenetur natus magnam officiis reiciendis, optio est. Doloremque maxime hic deserunt alias voluptatem similique! Praesentium. Tempore esse sit quae blanditiis accusantium commodi tenetur natus magnam officiis reiciendis, optio est. Doloremque maxime hic deserunt alias voluptatem similique! Praesentium. Tempore esse sit quae blanditiis accusantium commodi tenetur natus magnam officiis reiciendis, optio est. Doloremque maxime hic deserunt alias voluptatem similique! Praesentium.'},
        {id:3,title:'Request', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse sit quae blanditiis accusantium commodi tenetur natus magnam officiis reiciendis, optio est. Doloremque maxime hic deserunt alias voluptatem similique! Praesentium. Tempore esse sit quae blanditiis accusantium commodi tenetur natus magnam officiis reiciendis, optio est. Doloremque maxime hic deserunt alias voluptatem similique! Praesentium. Tempore esse sit quae blanditiis accusantium commodi tenetur natus magnam officiis reiciendis, optio est. Doloremque maxime hic deserunt alias voluptatem similique! Praesentium.'},
        {id:4,title:'Request', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse sit quae blanditiis accusantium commodi tenetur natus magnam officiis reiciendis, optio est. Doloremque maxime hic deserunt alias voluptatem similique! Praesentium. Tempore esse sit quae blanditiis accusantium commodi tenetur natus magnam officiis reiciendis, optio est. Doloremque maxime hic deserunt alias voluptatem similique! Praesentium. Tempore esse sit quae blanditiis accusantium commodi tenetur natus magnam officiis reiciendis, optio est. Doloremque maxime hic deserunt alias voluptatem similique! Praesentium.'},
        {id:5,title:'Request', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse sit quae blanditiis accusantium commodi tenetur natus magnam officiis reiciendis, optio est. Doloremque maxime hic deserunt alias voluptatem similique! Praesentium. Tempore esse sit quae blanditiis accusantium commodi tenetur natus magnam officiis reiciendis, optio est. Doloremque maxime hic deserunt alias voluptatem similique! Praesentium. Tempore esse sit quae blanditiis accusantium commodi tenetur natus magnam officiis reiciendis, optio est. Doloremque maxime hic deserunt alias voluptatem similique! Praesentium.'}
      ],
      snackbar: false,
      mensaje: ''
    }
  },
  methods:{
    payRequest(){
      this.snackbar = true
      this.mensaje= 'Thank you!'
    },
    deleteRequest(e){
        this.arrayRequest.splice(e,1)
    }
  }
}
</script>
