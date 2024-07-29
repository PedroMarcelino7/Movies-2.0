import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

interface Props {
    text: string
}

export default function SubmitButton({ text }: Props) {
    return (
        <Button type="submit" variant="contained" size="small">
            <Typography>
                {text}
            </Typography>
        </Button>
    );
}
