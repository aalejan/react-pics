import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
        'Client-ID y09m-LV_5G4249pU04XrKiC78eIa1847ijJbZ05sIE4',
  },
})
