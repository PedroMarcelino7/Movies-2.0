import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

interface Props {
    handleOpenCreateReview: () => void;
}

export default function ActionsButton({ handleOpenCreateReview }: Props) {
    return (
        <Box onClick={handleOpenCreateReview}
            sx={{
                '& > :not(style)': { m: 1 },
                position: 'fixed',
                bottom: 10,
                right: 10
            }}
        >
            <Fab size="small" color="secondary" aria-label="add" sx={{ display: { xs: 'flex', md: 'none' } }}>
                <AddIcon />
            </Fab>
            <Fab size="medium" color="secondary" aria-label="add" sx={{ display: { xs: 'none', md: 'flex', lg: 'none' } }}>
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="add" sx={{ display: { xs: 'none', lg: 'flex' } }}>
                <AddIcon />
            </Fab>
        </Box>
    );
}
