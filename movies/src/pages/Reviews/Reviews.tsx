import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

import MovieCard from '../../components/MovieCard/MovieCard'

interface Props {
    handleOpenEditReview: () => void
}

export default function Reviews({ handleOpenEditReview }: Props) {
    return (
        <Container>
            <Grid container spacing={2}>
                <MovieCard handleOpenEditReview={handleOpenEditReview} />
                <MovieCard handleOpenEditReview={handleOpenEditReview} />
                <MovieCard handleOpenEditReview={handleOpenEditReview} />
                <MovieCard handleOpenEditReview={handleOpenEditReview} />
                <MovieCard handleOpenEditReview={handleOpenEditReview} />
                <MovieCard handleOpenEditReview={handleOpenEditReview} />
            </Grid>
        </Container>
    );
}