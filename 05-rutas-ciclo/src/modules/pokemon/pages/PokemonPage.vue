<template>
  <h1>PokemonPage</h1>
  <h2>Pokemon #{{id}}</h2>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      pokemon: null
    }
  },
  created() {
    this.getPokemon()
  //   const { id } = this.$route.params
  //   this.id = id
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then((r) => r.json())
        this.pokemon = pokemon
        console.log(pokemon)
      } catch (err) {
        this.$router.push('/')
        console.log('No existe el pokemon con ese id')
      }
    }
  },
  watch: {
    id() {
      this.getPokemon();
    }
  }
}
</script>

<style>

</style>