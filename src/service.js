import axios from 'axios'
const pixabayURL = 'https://pixabay.com/api/'
const pixabayKey = process.env.REACT_APP_PIXABAY_API_KEY

export const getImages = (search) => {
    return axios.get(`${pixabayURL}?key=${pixabayKey}&q=${search}&image_type=photo`)
}

export const getOneImage = (id) => {
    return axios.get(`${pixabayURL}?key=${pixabayKey}&id=${id}`)
}

