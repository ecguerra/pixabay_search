import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ImageGallery from '../routes/ImageGallery'

const Search = () => {
    let [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState(undefined)
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch([...searchParams])
    }
    
    return (
        <div className='container'>
            <h1>Pixabay Photo Search</h1>
            <form onSubmit={handleSearch}>
                <input 
                    value={searchParams.get('search') || ''}
                    onChange={(e)=>{
                        let search = e.target.value
                        if (search) {
                            setSearchParams({ search })
                        } else {
                            setSearchParams({})
                        }
                    }}
                />
                <input type='submit' value='Search for Images'/>
            </form>
            <ImageGallery { ...search } />
        </div>
    )
}

export default Search