import axios from 'axios'
import env from 'react-dotenv'
export default axios.create(
  {
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: `Client-ID ${env.UNSPLASH_KEY}`
  }
})

console.log('Procurei no UNSPLASH!')