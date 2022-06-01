import axios from 'axios'

const authApi = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
  params: {
    key: 'AIzaSyDq_Nph3Mqz4ZMWTw5u1da6r73Z-Dy7ePg'
  }
})

export default authApi