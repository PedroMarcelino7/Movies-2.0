import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AutoComplete from '../../components/Inputs/AutoComplete';
import ModalButton from '../../components/Buttons/ModalButton';
import { useEffect, useState } from 'react';
import TextArea from '../../components/Inputs/TextArea';
import RatingInput from '../../components/Inputs/RatingInput';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface Props {
    handleCloseEditReview: () => void,
    openEditReview: boolean,
    review: Movie | undefined
}

interface Data {
    id: number | undefined,
    movieTitle: string,
    movieReview: string,
    movieRating: number,
    movieReleaseDate: string,
    movieImg: string,
}

interface Movies {
    id: number,
    label: string;
    releaseDate: string;
    img: string;
}

interface Movie {
    REVIEW_ID: number,
    REVIEW_MOVIE_TITLE: string;
    REVIEW_MOVIE_DATE: string;
    REVIEW_MOVIE_IMG: string;
    REVIEW_MOVIE_RATING: number;
    REVIEW_MOVIE_REVIEW: string;
}

export default function EditReview({ handleCloseEditReview, openEditReview, review }: Props) {
    const handleSubmit = async (data: Data, action: 'edit' | 'archive') => {
        console.log('action', action)

        try {
            const response = await fetch(`http://localhost:3001/movies/reviews/${action}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: data.id,
                    movieTitle: data.movieTitle,
                    movieReview: data.movieReview,
                    movieRating: data.movieRating,
                    movieReleaseDate: data.movieReleaseDate,
                    movieImg: data.movieImg,
                }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();

            console.log('Success:', result);
        } catch (err: any) {
            console.log("Error:", err);
        }
    }
    // API ----------------------------------------------------------------
    const searchURL = 'https://api.themoviedb.org/3/search/movie'
    const apiKey = import.meta.env.VITE_API_KEY

    const [query, setQuery] = useState('')
    const [searchOptions, setSearchOptions] = useState<Movies[]>([])
    const [selectedMovie, setSelectedMovie] = useState<Movies | null>(null)

    const getSearchMovies = async (url: string) => {
        const res = await fetch(url)
        const data = await res.json()

        const options = data.results.map((movie: any) => ({
            id: movie.id,
            label: movie.original_title,
            releaseDate: movie.release_date,
            img: movie.backdrop_path,
        }));

        setSearchOptions(options)
    }

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`

        getSearchMovies(searchWithQueryURL)
    }, [query])

    const handleSearch = (value: string) => {
        setQuery(value)
    }

    const handleSelectedMovie = (e: any, value: Movies | null) => {
        console.log('event:', e)
        setSelectedMovie(value)
    }

    return (
        <div>
            <Modal
                open={openEditReview}
                onClose={handleCloseEditReview}
            >
                <Box sx={style}>
                    <form onSubmit={(event) => {
                        event.preventDefault();

                        if (!selectedMovie) {
                            console.log("No movie selected");
                            return;
                        }

                        const formElements = event.currentTarget.elements as any;

                        const data: Data = {
                            id: review?.REVIEW_ID,
                            movieTitle: selectedMovie.label,
                            movieReview: formElements.movieReview.value,
                            movieRating: parseFloat(formElements.movieRating.value),
                            movieReleaseDate: selectedMovie.releaseDate,
                            movieImg: selectedMovie.img,
                        };

                        handleSubmit(data, 'archive');
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: 4
                        }}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Edit Review
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2
                            }}>
                                <AutoComplete
                                    handleSearch={handleSearch}
                                    name='movieTitle'
                                    required={true}
                                    movies={searchOptions}
                                    handleSelectedMovie={handleSelectedMovie}
                                    value={review && review.REVIEW_MOVIE_TITLE}
                                />

                                <TextArea
                                    name='movieReview'
                                    placeholder='Your Review...'
                                    required={false}
                                    value={review && review.REVIEW_MOVIE_REVIEW}
                                />

                                <RatingInput
                                    name='movieRating'
                                    precision={0.5}
                                    size='large'
                                    value={review && review.REVIEW_MOVIE_RATING}
                                />
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1
                            }}>
                                <ModalButton
                                    text='Edit'
                                    type='submit'
                                    color='primary'
                                />
                                <ModalButton
                                    text='Archive'
                                    type='submit'
                                    color='error'
                                />
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
