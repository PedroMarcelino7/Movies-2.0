import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

interface Props {
    text: string,
    type: "button" | "submit" | "reset" | undefined,
    color: "primary" | "secondary" | "success" | "error",
    onClick: () => any
}

export default function ModalButton({ text, type, color, onClick }: Props) {
    return (
        <Button type={type} variant="contained" size="small" color={color}>
            <Typography>
                {text}
            </Typography>
        </Button>
    );
}
