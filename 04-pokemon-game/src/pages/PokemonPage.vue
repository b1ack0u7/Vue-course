<template>
  <h1 v-if="!pokemon">Cargando...</h1>
  
  <div v-else>
    <h1>¿Quien es este pokemon?</h1>
    <PokemonPicture 
      :pokemonId="pokemon.id" 
      :showPokemon="showPokemon"

    />
    <PokemonOptions
      :pokemons="pokemonArr"
      @selected-Pokemon="checkAnswer"
    />

    <div v-if="showAnswer">
      <h2>{{message}}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </div>
  </div>


</template>

<script>
import PokemonPicture from '../components/PokemonPicture.vue'
import PokemonOptions from '../components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: {PokemonPicture, PokemonOptions},
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      const rndInt = Math.floor(Math.random() * 4)

      this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer(selectedId) {
      this.showPokemon = true
      this.showAnswer = true

      if(selectedId === this.pokemon.id) {
        this.message = `Correcto, ${this.pokemon.name}`
      } else {
        this.message = `Opps era, ${this.pokemon.name}`
      }
    },
    newGame() {
      this.pokemonArr = []
      this.pokemon = null
      this.showPokemon = false
      this.showAnswer = false
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>
