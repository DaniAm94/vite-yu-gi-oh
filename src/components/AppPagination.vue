<script>
export default {
    name: 'App Pagination',
    props: {
        hasPrevPage: Boolean,
        hasNextPage: Boolean,
        currentPage: Number,
        totalPages: Number
    },
    emits: ['change-page']
}
</script>

<template>
    <nav class="d-flex justify-content-center mt-4">
        <ul class="pagination">
            <li v-if="hasPrevPage" class="page-item" @click="$emit('change-page', currentPage - 1)" role="button">
                <span class="page-link">
                    <span>&laquo;</span>
                </span>
            </li>
            <li class="page-item"><span class="page-link">{{ currentPage }} - {{ totalPages }}</span></li>
            <li v-if="hasNextPage" class="page-item" @click="$emit('change-page', currentPage + 1)" role="button">
                <span class="page-link">
                    <span>&raquo;</span>
                </span>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.pagination * {
    color: black;
    font-size: 1.4rem;
    font-weight: bold;
}

li>span {
    background-color: #dedede;
    border: 1px solid black;
}

li>span:hover {
    background-color: #dedede;
}

li:first-of-type>span:hover,
li:last-of-type>span:hover {
    transform: scale(1.1);
}

li:first-of-type>span:active,
li:last-of-type>span:active {
    background-color: rgb(109, 109, 109);
    transform: scale(0.9);
}
</style>