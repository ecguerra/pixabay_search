import axios from 'axios'
const pixabayURL = 'https://pixabay.com/api/'
const pixabayKey = process.env.REACT_APP_PIXABAY_API_KEY

export const getImages = () => {
    return axios.get(`${pixabayURL}?key=${pixabayKey}&q=yellow+flowers&image_type=photo`)
}

export const getOneImage = (id) => {
    return axios.get(`${pixabayURL}?key=${pixabayKey}&id=${id}`)
}

