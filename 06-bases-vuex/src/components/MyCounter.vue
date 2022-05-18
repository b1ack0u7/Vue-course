<template>
  <h1>Counter - Vuex</h1>
  <!-- <h2>Direct Access: {{ $store.state.count }}</h2> -->
  <h2>Direct Access: {{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">Random</button>

  <hr>

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation {{ lastMutation }}</h2>

  <hr>

  <h1>Direct getter</h1>
  <!-- <h2>Direct getter: {{ $store.getters.squaredCount }}</h2> -->
  <h2>Direct getter: {{ $store.getters['counter/squaredCount'] }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  // computed: mapState(['count'])
  computed: {
    countComputed() {
      console.log(this.$store.state.counter.count)
      return this.$store.state.counter.count
    },
    ...mapState('counter', ['count', 'lastMutation', 'isLoading'])
    // ...mapState({
      //   count: state => state.count,
    //   lastMutation: state => state.lastMutation
    // })

    // ...mapState({
      //   count: state => state.counter.count,
    //   lastMutation: state => state.counter.lastMutation
    // })
  },
  methods: {
    // ...mapActions(['incrementRandomInt']),
    ...mapActions('counter', ['incrementRandomInt']),
    increment() {
      // this.$store.commit('increment')
      this.$store.commit('counter/increment')
    },
    incrementBy() {
      this.$store.commit('counter/incrementBy', 5)
    }
    // incrementRandom() {
    //   this.$store.dispatch('incrementRandomInt')
    // }
  }
}
</script>

<style>

</style>