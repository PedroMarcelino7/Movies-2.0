import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingScreen() {
    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            position: 'absolute',
            top: '0',
            left: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '100',
        }}>
            <Box sx={{
                display: 'flex'
            }}>
                <CircularProgress />
            </Box>
        </Box>
    );
}
