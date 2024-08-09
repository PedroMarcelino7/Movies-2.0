import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

interface Props {
    text: string,
    type: "button" | "submit" | "reset" | undefined,
    color: "primary" | "secondary" | "success" | "error",
}

export default function ModalButton({ text, type, color }: Props) {
    return (
        <Button type={type} variant="contained" size="small" color={color}>
            <Typography>
                {text}
            </Typography>
        </Button>
    );
}
