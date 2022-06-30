import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneImage } from '../service'

const Image = () => {
    let { imageId } = useParams()
    const [image, setImage] = useState(undefined)

    useEffect(() => {
        getOneImage(imageId).then(response => {
            console.log(response.data)
        },
        (error) => {
            console.log(error)
        })
    },[imageId])


    // const { id, largeImageURL, user, tags } = image

    return (
        <div>
            Placeholder
            {/* <img src={largeImageURL} alt={tags}/>
            <h4>{user}</h4>
            <p>Tags: {tags}</p>  */}
            
        </div>
    )
}

export default Image