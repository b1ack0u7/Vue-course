import { ref } from 'vue'
import Axios from 'axios'

const usePokemon = ( pokemonId = '1' ) => {
  const pokemon = ref()
  const isLoading = ref(false)
  const errorMessage = ref()

  const searchPokemon = async( id ) => {
    if(!id) return
    isLoading.value = true
    pokemon.value = null

    try {
      const { data } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      pokemon.value = data
      errorMessage.value = null

      console.log(data)
    } catch(error) {
      errorMessage.value = 'No se pudo cargar'
    }

    isLoading.value = false
  }
  searchPokemon(pokemonId)

  return {
    errorMessage,
    isLoading,
    pokemon,
    searchPokemon
  }
}

export default usePokemon