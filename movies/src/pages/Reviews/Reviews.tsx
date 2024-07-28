import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import MovieCard from '../../components/MovieCard/MovieCard';

interface Props {
    handleOpenEditReview: () => void;
}

interface Review {
    title: string;
    date: string;
    img: string;
    rating: number;
    review: string;
}

const reviews: Review[] = [
    {
        title: 'Title 1',
        date: '2024-07-28',
        img: '',
        rating: 4,
        review: ''
    },
    {
        title: 'Title 2',
        date: '2020-05-20',
        img: '',
        rating: 3.5,
        review: ''
    },
    {
        title: 'Title 3',
        date: '2018-02-10',
        img: '',
        rating: 4.5,
        review: ''
    },
    {
        title: 'Title 4',
        date: '2019-01-15',
        img: '',
        rating: 5,
        review: ''
    },
];

export default function Reviews({ handleOpenEditReview }: Props) {
    return (
        <Container>
            <Grid container spacing={2}>
                {reviews.map((review, index) => (
                    <MovieCard key={index} review={review} handleOpenEditReview={handleOpenEditReview} />
                ))}
            </Grid>
        </Container>
    );
}
