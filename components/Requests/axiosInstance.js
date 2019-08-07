import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://pacific-retreat-35565.herokuapp.com'
})

export default instance