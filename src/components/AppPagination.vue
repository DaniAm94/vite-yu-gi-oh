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
</style>