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
        <select v-model="currentType" @change="changeType" name="type" id="type">
            <option selected value="">All</option>
            <option v-for="type in types" :value="type">{{ type }}</option>

        </select>
    </div>
</template>

<style scoped>
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