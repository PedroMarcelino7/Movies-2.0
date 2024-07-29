import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AutoComplete from '../../components/Inputs/AutoComplete';
import SubmitButton from '../../components/Buttons/SubmitButton';

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

interface Data {
    movieTitle: string;
}

export default function CreateReview({ handleCloseCreateReview, openCreateReview }: Props) {
    const handleSubmit = async (data: Data) => {
        try {
            const response = await fetch('http://localhost:3001/movies/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    movieTitle: data.movieTitle,
                }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`)
            }

            const result = await response.json()

            console.log('Success:', result)
        } catch (err: any) {
            console.log("Error:", err)
        }
    }

    return (
        <div>
            <Modal
                open={openCreateReview}
                onClose={handleCloseCreateReview}
            >
                <Box sx={style}>
                    <form onSubmit={(event) => {
                        event.preventDefault();

                        const formElements = event.currentTarget.elements as any;

                        const data: Data = {
                            movieTitle: formElements.movieTitle.value
                        };

                        handleSubmit(data);
                    }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Create Review
                        </Typography>

                        <AutoComplete name='movieTitle' />

                        <SubmitButton text='Submit Review' />
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
