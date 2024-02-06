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

        <h1>Pokedex</h1>
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
</style>