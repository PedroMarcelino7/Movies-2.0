import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function MovieRate() {
    // const [value, setValue] = React.useState<number | null>(2);

    return (
        <Box>
            <Rating name="half-rating-read" value={3.5} precision={0.5} readOnly />
        </Box>
    );
}
