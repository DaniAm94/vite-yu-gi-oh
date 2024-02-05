<script>
export default {
    name: 'App Loader',

}
</script>

<template>
    <div class="overlay d-flex justify-content-center align-items-center">
        <img src="../assets/img/SeekPng.com_pokemon-emerald-logo-png_2200843.png" alt="pokeball icon">
    </div>
</template>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);

    img {
        animation: rotation 1s linear infinite alternate;
        width: 200px;
        height: auto;
    }
}

@keyframes rotation {
    100% {
        transform: rotate(360deg);
    }

}
</style>