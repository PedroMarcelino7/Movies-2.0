import Rating from '@mui/material/Rating';

export default function RatingInput() {
    return (
        <Rating name="rating" defaultValue={0} precision={0.5} />
    );
}
