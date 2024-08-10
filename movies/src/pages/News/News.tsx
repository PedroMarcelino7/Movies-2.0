import { useEffect, useState } from "react"

interface Movie {
    id: number,
    title: string,
    img: string
}

export default function News() {
    const searchURL = 'https://api.themoviedb.org/3/movie/now_playing'
    const apiKey = import.meta.env.VITE_API_KEY

    const [movies, setMovies] = useState<Movie[]>([])

    const getMovies = async () => {
        try {
            const result = await fetch(`${searchURL}?${apiKey}`)
            const data = await result.json()

            setMovies(data.results)
            console.log(data.results)
        } catch (err: any) {
            console.log('Error:', err)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div>
            {
                movies.map((movie, index) => (
                    <h1 key={index}>
                        {movie.title}
                    </h1>
                ))
            }
        </div>
    )
}