import { ref } from 'vue'
import Axios from 'axios'

const useUsers = () => {
  const users = ref([])
  const isLoading = ref(true)
  const currentPage = ref(1)
  const errorMessage = ref()
  
  const getUsers = async( page = 1 ) => {
    if(page <= 0) page = 1
  
    isLoading.value = true
  
    const {data} = await Axios.get('https://reqres.in/api/users', {
      params: { page }
    })
  
    if(data.data.length > 0) {
      users.value = data.data
      currentPage.value = page
      errorMessage.value = ''
    } else if(currentPage.value > 0) {
      errorMessage.value = 'No hay mas usuarios'
    }
  
    isLoading.value = false
  }

  getUsers()

  return {
    currentPage,
    errorMessage,
    isLoading,
    users,
    nextPage: () => getUsers(currentPage.value + 1),
    prevPage: () => getUsers(currentPage.value - 1),
  }
}

export default useUsers
