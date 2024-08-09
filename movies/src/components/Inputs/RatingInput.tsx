import Rating from '@mui/material/Rating';

interface Props {
    name: string,
    precision: number,
    size?: 'small' | 'medium' | 'large',
    value: any,
}

export default function RatingInput({ name, precision, size, value }: Props) {
    return (
        <Rating
            name={name}
            precision={precision}
            size={size}
            defaultValue={value}
        />
    );
}
