<template>
    <v-container grid-list-md>
        <h1 class="text-center">Services</h1>
        <v-divider></v-divider>
        <v-layout row wrap>
            <v-flex xs12 mt-5 >
                <h2 class="text-center">Cleaning companies available</h2>
            </v-flex>
            <v-flex xs12 sm6 mt-5 v-for="(item,index) in arrayCompanies" :key="index">
                <v-card>
                <v-card-title>{{item.title}}</v-card-title>
                <v-img src="../assets/cleaning-company2.jpeg" height="150" contain></v-img>
                <v-card-text>{{item.description}}.</v-card-text>
                    <v-card-actions>
                        <v-btn color="info" outlined><router-link to="/home" class="text-decoration-none">Aply</router-link></v-btn>
                    </v-card-actions>
                    </v-card>
            </v-flex> 
        </v-layout>
    </v-container>
</template>

<script>
export default {
        data(){
        return{
            arrayCompanies:[
                {id:1,title: 'Lorem, ipsum dolor.', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.'},
                {id:2,title: 'Lorem, ipsum dolor.', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.'},
                {id:3,title: 'Lorem, ipsum dolor.', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.'},
                {id:4,title: 'Lorem, ipsum dolor.', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.'},
                {id:5,title: 'Lorem, ipsum dolor.', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.'},
                {id:6,title: 'Lorem, ipsum dolor.', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.'}
            ]
        }
    },
}
</script>