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
    <AppLoader v-if="store.isLoading" />
    <main v-else class="row row-cols-5 row-gap-3 ">
        <div v-for="pokemon in store.pokemons" :key="pokemon.id" class="col">
            <PokemonCard :pokemon="pokemon" />
        </div>
    </main>
</template>

