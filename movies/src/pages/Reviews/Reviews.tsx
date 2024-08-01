import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

import MovieCard from '../../components/MovieCard/MovieCard';
import LoadingScreen from '../../components/Loading/LoadingScreen';
import CreateReview from './CreateReview';
import EditReview from './EditReview';
import ActionsButton from '../../components/ActionsButton/ActionsButton';

interface Movie {
    REVIEW_ID: number,
    REVIEW_MOVIE_TITLE: string;
    REVIEW_MOVIE_DATE: string;
    REVIEW_MOVIE_IMG: string;
    REVIEW_MOVIE_RATING: number;
    REVIEW_MOVIE_REVIEW: string;
}

export default function Reviews() {

    // MODAL CONTROLLER ----------------------------------------------------------------------------------------------------------------------------------------------------
    const [openCreateReview, setOpenCreateReview] = useState(false);
    const [openEditReview, setOpenEditReview] = useState(false);

    const handleOpenCreateReview = () => setOpenCreateReview(true)
    const handleCloseCreateReview = () => setOpenCreateReview(false)

    const handleOpenEditReview = () => setOpenEditReview(true)
    const handleCloseEditReview = () => setOpenEditReview(false)

    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // GET MOVIES FROM DATABASE ---------------------------------------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        getMovies();
    }, []);

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

            setLoading(false);
            setMovies(result);
        } catch (err: any) {
            console.log('Error:', err);
        }
    };

    return (
        <>
            <Container
                sx={{
                    marginTop: 5,
                    marginBottom: 10
                }}
            >
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                >
                    {loading
                        ? <LoadingScreen />
                        : movies.map((movie, index) => (
                            <MovieCard
                                key={index}
                                movie={movie}
                                handleOpenEditReview={handleOpenEditReview}
                            />
                        ))
                    }
                </Grid>

                <CreateReview
                    handleCloseCreateReview={handleCloseCreateReview}
                    openCreateReview={openCreateReview}
                />
                <EditReview
                    handleCloseEditReview={handleCloseEditReview}
                    openEditReview={openEditReview}
                />
            </Container>

            <ActionsButton handleOpenCreateReview={handleOpenCreateReview} />
        </>
    );
}
