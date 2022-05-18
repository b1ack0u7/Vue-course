import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'https://testings-e4d17-default-rtdb.firebaseio.com'
})

export default journalApi