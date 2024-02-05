<script>


const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';
import { store } from './data/store.js';
import axios from 'axios';
import AppMain from './components/AppMain.vue';


export default {
  name: 'App Vue',
  data: () => ({
    store
  }),
  components: {
    AppMain
  },
  methods: {
    fetchPokemons(endpoint) {
      store.isLoading = true;
      // Set a timeout to see the loader
      setTimeout(() => {
        axios.get(endpoint).then(res => {
          store.page = res.data.page;
          store.hasPrevPage = res.data.hasPrevPage;
          store.hasNextPage = res.data.hasNextPage;
          store.prevPage = res.data.prevPage;
          store.nextPage = res.data.nextPage;
          store.totalPages = res.data.totalPages;
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
        }).catch(err => {
          console.error(err)
        }).then(() => {
          store.isLoading = false;
        })
      }, 2000)
    },
    goTo(page) {
      const endpointPlusKey = endpoint + `?page=${page}`
      this.fetchPokemons(endpointPlusKey);
    }
  },
  created() {
    this.fetchPokemons(endpoint);
  }
}
</script>

<template>
  <div class="background">

    <div class="container-sm py-3 ">
      <AppMain />


    </div>
    <!-- Pagination -->
    <nav v-if="!store.isLoading" class="d-flex justify-content-center mt-4">
      <ul class="pagination">
        <li v-if="store.hasPrevPage" class="page-item" @click="goTo(store.prevPage)" role="button">
          <span class="page-link">
            <span>&laquo;</span>
          </span>
        </li>
        <li class="page-item"><span class="page-link">{{ store.page }} - {{ store.totalPages }}</span></li>
        <li v-if="store.hasNextPage" class="page-item" @click="goTo(store.nextPage)" role="button">
          <span class="page-link">
            <span>&raquo;</span>
          </span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
.background {
  height: 100vh;
  background-image: url('./assets/img/pokemon-pokedex-background.jpg');
  background-size: 100% 100%;
  padding-top: 150px;
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

.pagination * {
  color: black;
  font-size: 1.4rem;
  font-weight: bold;
}
</style>
