import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

import MovieCard from '../components/MovieCard/MovieCard'

export default function Movies() {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <MovieCard />
                </Grid>
                <Grid item xs={4}>
                    <MovieCard />
                </Grid>
                <Grid item xs={4}>
                    <MovieCard />
                </Grid>
                <Grid item xs={8}>
                    <MovieCard />
                </Grid>
            </Grid>
        </Container>
    );
}