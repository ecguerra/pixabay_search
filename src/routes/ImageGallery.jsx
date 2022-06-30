import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
            {images.map(image => (
                <Link to={`/images/${image.id}`} key={image.id}>
                    <img src={image.previewURL} alt={image.tags}/>
                </Link>
            ))}
        </div>
    )
}

export default ImageGallery