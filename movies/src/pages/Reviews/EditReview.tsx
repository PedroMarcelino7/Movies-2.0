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
    openEditReview: boolean
}

interface Data {
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

export default function EditReview({ handleCloseEditReview, openEditReview }: Props) {
    const handleSubmit = async (data: Data) => {
        console.log('data', data)
        console.log('data title', data.movieTitle)
        console.log('data review', data.movieReview)
        console.log('data rating', data.movieRating)
        console.log('data release date', data.movieReleaseDate)
        console.log('data img', data.movieImg)

        try {
            const response = await fetch('http://localhost:3001/movies/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
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
        console.log('search options:', searchOptions)
    }

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`

        getSearchMovies(searchWithQueryURL)
    }, [query])

    const handleSearch = (value: string) => {
        console.log('valor recebido do on change:', value)
        setQuery(value)
        console.log('query:', query)
    }

    const handleSelectedMovie = (e: any, value: Movies | null) => {
        console.log('event:', e)
        setSelectedMovie(value)
        console.log('selected movie', value)
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
                            movieTitle: selectedMovie.label,
                            movieReview: formElements.movieReview.value,
                            movieRating: parseFloat(formElements.movieRating.value),
                            movieReleaseDate: selectedMovie.releaseDate,
                            movieImg: selectedMovie.img,
                        };

                        handleSubmit(data);
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
                                />

                                <TextArea
                                    name='movieReview'
                                    placeholder='Your Review...'
                                    required={false}
                                />

                                <RatingInput
                                    name='movieRating'
                                    defaultValue={0}
                                    precision={0.5}
                                    size='large'
                                />
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1
                            }}>
                                <ModalButton text='Edit' type='submit' color='primary' />

                                <ModalButton text='Archive' type='button' color='error' />
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
