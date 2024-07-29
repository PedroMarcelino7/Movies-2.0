import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

import MovieCard from '../../components/MovieCard/MovieCard';
import LoadingScreen from '../../components/Loading/LoadingScreen';

interface Props {
    handleOpenEditReview: () => void;
}

interface Movie {
    MOVIE_TITLE: string;
    MOVIE_DATE: string;
    MOVIE_IMG: string;
    MOVIE_RATING: number;
    MOVIE_REVIEW: string;
}

export default function Reviews({ handleOpenEditReview }: Props) {

    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async () => {
        try {
            const response = await fetch('http://localhost:3001/movies', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();
            console.log(result)

            setLoading(false)
            setMovies(result)
        } catch (err: any) {
            console.log('Error:', err);
        }
    }

    return (
        <Container>
            <Grid container spacing={2}>
                {loading
                    ? <LoadingScreen />
                    : movies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} handleOpenEditReview={handleOpenEditReview} />
                    ))
                }
            </Grid>
        </Container>
    );
}
