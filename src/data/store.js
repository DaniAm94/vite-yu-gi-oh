import { reactive } from 'vue';

export const store = reactive({
    pokemons: [],
    isLoading: false,
    page: null,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null,
    totalPages: null,
    types: []
})