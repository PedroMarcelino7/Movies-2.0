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
    REVIEW_STATUS: number
}

export default function Reviews() {

    // MODAL CONTROLLER ----------------------------------------------------------------------------------------------------------------------------------------------------
    const [openCreateReview, setOpenCreateReview] = useState(false);
    const [openEditReview, setOpenEditReview] = useState(false);

    const handleOpenCreateReview = () => setOpenCreateReview(true)
    const handleCloseCreateReview = () => setOpenCreateReview(false)

    const handleOpenEditReview = (movie: Movie) => {
        setOpenEditReview(true)
        setReviewToEdit(movie)
    }
    const handleCloseEditReview = () => setOpenEditReview(false)

    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [reviewToEdit, setReviewToEdit] = useState<Movie | undefined>(undefined)

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

            console.log('result', result)
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
                            movie.REVIEW_STATUS === 1 ? (
                                <MovieCard
                                    key={index}
                                    movie={movie}
                                    handleOpenEditReview={handleOpenEditReview}
                                />
                            ) : null
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
                    review={reviewToEdit}
                />
            </Container>

            <ActionsButton handleOpenCreateReview={handleOpenCreateReview} />
        </>
    );
}
