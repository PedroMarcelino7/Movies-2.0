import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import { Grid } from '@mui/material';
import MovieRate from './MovieRate';
import TooltipTop from '../Tooltip/Tooltip';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

interface Review {
    title: string;
    date: string;
    img: string;
    rating: number;
    review: string;
}

interface Props {
    handleOpenEditReview: () => void;
    review: Review;
}

export default function MovieCard({ handleOpenEditReview, review }: Props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    action={
                        <IconButton>
                            <TooltipTop name='Edit'>
                                <EditIcon onClick={handleOpenEditReview} />
                            </TooltipTop>
                        </IconButton>
                    }
                    title={review.title}
                    subheader={review.date}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={review.img}
                    alt={review.title}
                />
                <CardActions disableSpacing>
                    <MovieRate rating={review.rating} />
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <TooltipTop name='Review'>
                            <ExpandMoreIcon />
                        </TooltipTop>
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>{review.review}</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    );
}
