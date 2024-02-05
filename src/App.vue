<script>


const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';
import { store } from './data/store.js';
import axios from 'axios';
import AppMain from './components/AppMain.vue';


export default {
  name: 'App Vue',
  components: {
    AppMain
  },
  methods: {
    fetchPokemons() {
      axios.get(endpoint).then(res => {
        store.pokemons = res.data.docs.map(pokemon => {
          return {
            id: pokemon._id,
            name: pokemon.name,
            number: pokemon.number,
            type: pokemon.type1,
            type2: pokemon.type2,
            img: pokemon.imageUrl
          }
        })
      })
    }
  },
  created() {
    this.fetchPokemons();
  }
}
</script>

<template>
  <div class="background">

    <div class="container-sm py-3 ">
      <AppMain />
      <!-- Main WIP -->
    </div>
  </div>
</template>

<style>
.background {
  height: 100vh;
  background-image: url('./assets/img/pokemon-pokedex-background.jpg');
  background-size: 100% 100%;
  padding-top: 200px;
}

.container-sm {
  background-color: #63666b;
  border-top: 15px solid;
  border-bottom: 15px solid;
  border-right: 10px solid;
  border-left: 10px solid;
  border-color: #dedede;
  border-radius: 10px;
}
</style>
