<template>
  <h1>AboutPage</h1>
  <hr>
  <h2>{{name}}</h2>
  <button @click="changeName">Cambiar nombre</button>
</template>

<script>
export default {
  data() {
    return {
      name: 'Axel'
    }
  },
  methods: {
    changeName() {
      this.name = 'Ricardo'
    }
  },
  beforeCreate() {
  console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  updated() {
    console.log('updated')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  errorCaptured() {
    console.log('errorCaptured')
  },
  renderTracked() {
    console.log('renderTracked')
  },
  renderTriggered() {
    console.log('renderTriggered')
  }
}
</script>

<style>

</style>