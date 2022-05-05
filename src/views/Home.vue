<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <v-card>
                    <v-card-title>Lorem, ipsum dolor.</v-card-title>
                    <v-img src="../assets/cleaning-company2.jpeg" height="150" contain></v-img>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.</v-card-text>
                    <v-card-actions>
                        <v-btn color="info" flat>Accion</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex> 

            <v-flex xs12 sm6>
                <v-card>
                    <v-img src="/assets/logo.png"></v-img>
                    <v-card-title>Lorem, ipsum dolor.</v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nostrum.</v-card-text>
                    <v-card-actions>
                        <v-btn color="info">Accion</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex> 

        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
        drawer: false
    }),
  }
</script>