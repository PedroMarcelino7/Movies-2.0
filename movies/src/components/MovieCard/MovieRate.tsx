import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Tip from '../Tooltip/Tip';

interface Props {
    rating: number
}

export default function MovieRate({ rating }: Props) {
    return (
        <Tip name={`Rating - ${rating}`}>
            <Box>
                <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
            </Box>
        </Tip>
    );
}
