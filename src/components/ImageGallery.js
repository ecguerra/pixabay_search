import { useState, useEffect } from 'react'
import Image from './Image'
import { getImages } from '../service'

const ImageGallery = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        getImages().then(response => {
            console.log(response.data.hits)
        },
        (error) => {
            console.log(error)
        }
        )
    }, [])

    return(
        <div>
            <h1>HI</h1>
            <Image />
        </div>
    )
}

export default ImageGallery