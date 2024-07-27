import Container from '@mui/material/Container';

import MovieCard from '../components/MovieCard/MovieCard'

type Props = {}

const Movies = (props: Props) => {
    return (
        <Container maxWidth="lg">
            <MovieCard />
        </Container>
    )
}

export default Movies