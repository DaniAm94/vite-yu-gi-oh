<script>
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';
import axios from 'axios';
import AppMain from './components/AppMain.vue';
export default {
  name: 'App Vue',
  data: () => ({
    pokemons: []
  }),
  components: {
    AppMain
  },
  methods: {
    fetchPokemons() {
      axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons').then(res => {
        this.pokemons = res.data.docs.map(pokemon => {
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
  <div class="container">
    <AppMain />
    <!-- Main WIP -->
  </div>
</template>

<style>
.container {
  max-width: 1080px;
  height: 100vh;
  background-image: url('./assets/img/pxfuel.jpg');
  background-size: 100% 100%;
}
</style>
