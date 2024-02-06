<script>


import { endpoint, endpointType } from './data' //This path points to the index.js file
import { store } from './data/store.js';
import axios from 'axios';
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import { TrackOpTypes } from 'vue';


export default {
  name: 'App Vue',
  data: () => ({
    store,
  }),
  components: {
    AppMain,
    AppHeader
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
    fetchPokemonTypes() {
      axios.get(endpointType).then(res => {
        store.types = res.data;
      })
    },
    goTo(page) {
      const endpointPlusPage = endpoint + `?page=${page}`
      this.fetchPokemons(endpointPlusPage);
    },
    filterPokemonsPerType(type) {
      if (type) {
        this.fetchPokemons(endpoint + `?eq[type1]=${type}`)
      } else {
        // Se type è vuoto (quindi il select è su all)
        this.fetchPokemons(endpoint)
      }
    }
  },
  created() {
    this.fetchPokemons(endpoint);
    this.fetchPokemonTypes();
  }
}
</script>

<template>
  <div class="background">

    <AppHeader @change-type="filterPokemonsPerType" :types="store.types" />
    <div class="container-sm py-3 main">
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

.container-sm.main {
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
