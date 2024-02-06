<script>
export default {
    name: 'Pomenon Card',
    props: {
        pokemon: Object
    }
}
</script>

<template>
    <div class="pokemon-card text-center rounded p-3">
        <div class="thumb d-flex justify-content-center align-items-center rounded-circle mb-2">
            <figure>

                <img class="img-fluid" :src="pokemon.img" :alt="pokemon.name">
            </figure>
        </div>
        <div>{{ pokemon.number }}</div>
        <div><strong>{{ pokemon.name }}</strong></div>
        <div>{{ pokemon.type }} <span v-if="pokemon.type2">- {{ pokemon.type2 }}</span></div>

    </div>
</template>

<style scoped>
.pokemon-card {
    background-color: lightgray;
    box-shadow: 0 0 10px black;
}

.thumb {
    background-color: white;
    overflow: hidden;
    aspect-ratio: 1/1;

    figure {
        width: 70%;
        margin: 0;

        img {
            /* To prevent kakuna's img insane height */
            max-height: 190px;
        }
    }


}
</style>