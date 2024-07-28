import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

import MovieCard from '../components/MovieCard/MovieCard'

export default function Reviews() {
    return (
        <Container>
            <Grid container spacing={2}>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </Grid>
        </Container>
    );
}