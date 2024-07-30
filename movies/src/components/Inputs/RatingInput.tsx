import Rating from '@mui/material/Rating';

interface Props {
    name: string,
    defaultValue: number,
    precision: number,
    size?: 'small' | 'medium' | 'large',
}

export default function RatingInput({ name, defaultValue, precision, size }: Props) {
    return (
        <Rating name={name} defaultValue={defaultValue} precision={precision} size={size} />
    );
}
