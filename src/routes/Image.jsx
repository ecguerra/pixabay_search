import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneImage } from '../service'

const Image = () => {
    let { imageId } = useParams()
    const [image, setImage] = useState(undefined)

    useEffect(() => {
        getOneImage(imageId).then(response => {
            setImage(response.data.hits[0])
        },
        (error) => {
            console.log(error)
        })
    },[imageId])

    const { largeImageURL, tags, user } = image || {}

    return (
        <div className='image-container'>
            {image ?
                <>
                    <div className='details'>
                        <h4>Photo by {user}</h4>
                        <p>Tags: {tags}</p> 
                    </div>
                    <img src={largeImageURL} alt={tags} className='large-image'/>
                </>
                :
                <p>Loading...</p>
            }
            <Link to='/'>Back to Search</Link>
        </div>
    )
}

export default Image