<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" />
    </v-layout>
</template>

<script>
    import Stock from './Stock'
    export default{
        components: { Stock },
        data(){
            return {
                stocks: [
                    {id: 1, name: 'BMW', price: 100 },
                    {id: 2, name: 'Facebook', price: 700 },
                    {id: 3, name: 'Google', price: 300 },
                    {id: 4, name: 'SEB', price: 500 }
                ]
            }
        }

    }
</script>

<style>

</style>