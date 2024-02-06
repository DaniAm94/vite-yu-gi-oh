<script>
export default {
    name: 'App Header',
    data: () => ({
        currentType: ''
    }),
    props: {
        types: Array
    },
    emits: ['changeType'],
    methods: {
        changeType() {
            this.$emit('changeType', this.currentType)
        }
    }

}
</script>

<template>
    <div class="container-sm d-flex justify-content-between align-items-center ">

        <h1>P<img src="../assets/img/SeekPng.com_pokemon-emerald-logo-png_2200843.png" alt="pokeball">kedex</h1>
        <div class="led-group d-flex column-gap-4">
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
        </div>
        <select v-model="currentType" @change="changeType" name="type" id="type">
            <option selected value="">All</option>
            <option v-for="type in types" :value="type">{{ type }}</option>

        </select>
    </div>
</template>

<style scoped>
.container-sm {
    background-image: linear-gradient(to left, rgb(252 252 252), rgb(125 125 125), rgb(252 252 252));
    background-size: 40%;
    border: 10px solid black;
    border-radius: 10px;
}


.led {
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 3px solid black;
}

.led:first-of-type {
    background-image: radial-gradient(white, blue);
}

.led:nth-of-type(2) {
    background-image: radial-gradient(white, red);
}

.led:nth-of-type(3) {
    background-image: radial-gradient(white, yellow);
}

.led:last-of-type {
    background-image: radial-gradient(white, green);
}

select {
    padding: 5px 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
    font-weight: bold;
}

h1 {
    font-size: 3rem;
    text-shadow: -1px 1px 3px white;

    img {
        height: 25px;
    }
}
</style>