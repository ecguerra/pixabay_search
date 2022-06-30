import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getImages } from '../service'

const ImageGallery = (search) => {
    const [images, setImages] = useState([])
    const imageSearch = (search[0] && encodeURIComponent(search[0][1])) || ''

    useEffect(() => {
        getImages(imageSearch).then(response => {
            setImages(response.data.hits)
        },
        (error) => {
            console.log(error)
        }
        )
    }, [imageSearch])

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