import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

interface Props{
    rating: number
}

export default function MovieRate({ rating }: Props) {
    // const [value, setValue] = React.useState<number | null>(2);

    return (
        <Box>
            <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
        </Box>
    );
}
