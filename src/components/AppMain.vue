<script>
import { store } from '../data/store.js';
import PokemonCard from './PokemonCard.vue';
export default {
    name: 'App Main',
    data: () => ({
        store
    }),
    components: {
        PokemonCard
    }
}
</script>

<template>
    <main class="row row-cols-5 row-gap-3 ">
        <div v-for="pokemon in store.pokemons" class="col">
            <PokemonCard :pokemon="pokemon" />
        </div>
    </main>
</template>

