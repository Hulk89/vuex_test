<template>
    <div class="hello">
        <b>count : {{ counter }}</b><br>
        <input type="button" @click="increment()" value="increment_delay"/>
        <input type="button" @click="decrement()" value="decrement"/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'HelloWorld',
    data () {
        return {}
    },
    computed: 
        /*
        {
            counter() {
                return this.$store.getters.getCounter;
            }
        },
        */
        mapGetters({
            counter: 'getCounter'}),
    created: function() {
        console.log(this.$store)
    },
    methods: {
        increment: function() {
            //this.$store.commit('increment', {value: 10})
            this.$store.dispatch('increment_delay', {value: 10})
        },
        decrement: function() {
            this.$store.commit('decrement', {value: 2})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
