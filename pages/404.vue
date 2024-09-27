<template>
    <v-row>
        <v-col class="text-center mt-16">
            <h1 class="font-weight-bold">404</h1>
            <p>Page not found</p>
            <v-btn size="x-large" color="primary" to="/" class="mt-5">
                Visit Homepage
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "404",
    }
</script>

<style lang="scss" scoped>
h1 {
    font-size: 10rem;
    font-family: "Tw Cen MT", sans-serif;
}

p {
    font-size: 5rem;
    font-family: "Tw Cen MT", sans-serif;
}
</style>