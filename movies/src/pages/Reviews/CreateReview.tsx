import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AutoComplete from '../../components/Inputs/AutoComplete';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface Props {
    handleCloseCreateReview: () => void,
    openCreateReview: boolean
}

export default function CreateReview({ handleCloseCreateReview, openCreateReview }: Props) {
    return (
        <div>
            <Modal
                open={openCreateReview}
                onClose={handleCloseCreateReview}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create Review
                    </Typography>
                    
                    <AutoComplete />
                </Box>
            </Modal>
        </div>
    );
}
