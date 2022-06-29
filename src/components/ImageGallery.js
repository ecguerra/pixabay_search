import { useState, useEffect } from 'react'
import Image from './Image'
import { getImages } from '../service'

const ImageGallery = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        getImages().then(response => {
            setImages(response.data.hits)
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
            {images.map(image => (
                <img src={image.previewURL} alt={image.tags} key={image.id}/>
            ))}
            <Image />
        </div>
    )
}

export default ImageGallery