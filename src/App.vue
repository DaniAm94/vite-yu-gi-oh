<script>


import { endpoint, endpointType } from './data' //This path points to the index.js file
import { store } from './data/store.js';
import axios from 'axios';
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import AppPagination from './components/AppPagination.vue';


export default {
  name: 'App Vue',
  data: () => ({
    store,
    currentEndpoint: endpoint
  }),
  components: {
    AppMain,
    AppHeader,
    AppPagination
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
      // Se il current endpoint contiene già una query (quella per tipo)
      if (this.currentEndpoint.includes('?')) {
        // Allora aggiungine un'altra (&) per la pagina (Non aggiorna il current endpoint)
        this.fetchPokemons(this.currentEndpoint + `&page=${page}`);
      } else {  // Altrimenti aggiungi la query per pagina come prima (?) (Non aggiorna il current endpoint)
        this.fetchPokemons(this.currentEndpoint + `?page=${page}`);
      }
    },
    filterPokemonsPerType(type) {
      if (type) {
        // Se è statp selezionato un tipo aggiorna il current endpoint con la query per tipo
        this.currentEndpoint = endpoint + `?eq[type1]=${type}`;
      } else {
        // Altrimenti se type è vuoto (quindi il select è su all) resetta il current endpoint al valore di partenza
        this.currentEndpoint = endpoint;
      }
      this.fetchPokemons(this.currentEndpoint)
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

    <AppHeader @change-type="filterPokemonsPerType" :types="store.types" class="mb-5" />
    <div class="container-sm py-3 main z-1 position-relative ">
      <AppMain />


    </div>
    <!-- Pagination -->
    <AppPagination @change-page="goTo" v-if="!store.isLoading" :has-next-page="store.hasNextPage"
      :has-prev-page="store.hasPrevPage" :current-page="store.page" :total-pages="store.totalPages" />

  </div>
</template>

<style>
.background {
  min-height: 100vh;
  background-image: linear-gradient(135deg, red 600px, black 600px 700px, white 700px);
  padding-top: 25px;
}

.background::after {
  content: '';
  border-radius: 50%;
  border: 20px solid black;
  background-color: white;
  width: 200px;
  aspect-ratio: 1/1;
  position: absolute;
  top: 690px;
  left: 30px;
  z-index: 0;
}

.container-sm.main {
  background-color: #63666b;
  border-top: 15px solid;
  border-bottom: 15px solid;
  border-right: 10px solid;
  border-left: 10px solid;
  border-color: #dedede;
  border-radius: 10px;
  z-index: 0;
}
</style>
