import { useSearchParams } from 'react-router-dom'

const Search = () => {
    let [searchParams, setSearchParams] = useSearchParams({ replace: true })

    return (
        <div>
            <input
                value={searchParams.get('search') || ''}
                onChange={(e) => {
                    let search = e.target.value
                    if (search) {
                        setSearchParams({ search }, { replace: true })
                    } else {
                        setSearchParams({}, { replace: true })
                    }
                }}
            />
        </div>
    )
}

export default Search