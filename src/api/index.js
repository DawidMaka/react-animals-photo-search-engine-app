import axios from 'axios'

const clientId = 'dxjGIFqOGskBueOEpKeCQtZRMaGT3bvejFB8dVRuuQY'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: `Client-ID ${clientId}`,
  },
})
