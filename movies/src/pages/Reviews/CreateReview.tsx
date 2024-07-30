import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AutoComplete from '../../components/Inputs/AutoComplete';
import SubmitButton from '../../components/Buttons/SubmitButton';
import RatingInput from '../../components/Inputs/RatingInput';
import TextArea from '../../components/Inputs/TextArea';
import { useEffect } from 'react';

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
    handleCloseCreateReview: () => void,
    openCreateReview: boolean
}

interface Data {
    movieTitle: string,
    movieReview: string,
    movieRating: number,
}

export default function CreateReview({ handleCloseCreateReview, openCreateReview }: Props) {
    const handleSubmit = async (data: Data) => {
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

    // -------------------------------------------------------------------------

    const searchURL = 'https://api.themoviedb.org/3/search/movie'
    const apiKey = import.meta.env.VITE_API_KEY

    // const [searchParams] = useSearchParams()
    // const [movies, setMovies] = useState([])
    // const query = searchParams.get("q")

    // const getSearchedMovies = async (url: string) => {
    //     const res = await fetch(url)
    //     const data = await res.json()

    //     setMovies(data.results)
    // }

    // useEffect(() => {
    //     const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`

    //     getSearchedMovies(searchWithQueryURL)
    // }, [query])
    useEffect(() => {
        console.log('ativou o use effect')
    }, [])

    return (
        <div>
            <Modal
                open={openCreateReview}
                onClose={handleCloseCreateReview}
            >
                <Box sx={style}>
                    <form onSubmit={(event) => {
                        event.preventDefault();

                        const formElements = event.currentTarget.elements as any;

                        const data: Data = {
                            movieTitle: formElements.movieTitle.value,
                            movieReview: formElements.movieReview.value,
                            movieRating: parseFloat(formElements.movieRating.value),
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
                                Create Review
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2
                            }}>
                                <AutoComplete name='movieTitle' required={true} movies={[{ label: 'teste', releaseDate: '2024-07-30', img: '' }, { label: 'teste2', releaseDate: '2024-07-30', img: '' }]} />

                                <TextArea name='movieReview' placeholder='Your Review...' required={false} />

                                <RatingInput name='movieRating' defaultValue={0} precision={0.5} size='large' />
                            </Box>

                            <SubmitButton text='Submit Review' />
                        </Box>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
