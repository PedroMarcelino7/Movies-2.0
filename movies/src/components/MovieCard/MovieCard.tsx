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

import Tip from '../Tooltip/Tip';

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

interface Movie {
    REVIEW_ID: number,
    REVIEW_MOVIE_TITLE: string;
    REVIEW_MOVIE_DATE: string;
    REVIEW_MOVIE_IMG: string;
    REVIEW_MOVIE_RATING: number;
    REVIEW_MOVIE_REVIEW: string;
    REVIEW_STATUS: number
}

interface Props {
    handleOpenEditReview: (movie: Movie) => void,
    movie: Movie,
}

export default function MovieCard({ handleOpenEditReview, movie }: Props) {
    const imageUrl = 'https://image.tmdb.org/t/p/w500/'

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
            <Card sx={{ width: '100%', maxWidth: 345 }}>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleOpenEditReview(movie)}>
                            <Tip name='Edit' placement='bottom'>
                                <EditIcon />
                            </Tip>
                        </IconButton>
                    }
                    title={
                        <Tip name={movie.REVIEW_MOVIE_TITLE} placement='bottom-start'>
                            <Typography
                                noWrap
                                sx={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '250px'
                                }}
                            >
                                {movie.REVIEW_MOVIE_TITLE}
                            </Typography>
                        </Tip>
                    }
                    subheader={movie.REVIEW_MOVIE_DATE}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={`${imageUrl}${movie.REVIEW_MOVIE_IMG}`}
                    alt={movie.REVIEW_MOVIE_TITLE}
                />
                <CardActions disableSpacing>
                    <MovieRate rating={movie.REVIEW_MOVIE_RATING} />
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <Tip name='Review' placement='left'>
                            <ExpandMoreIcon />
                        </Tip>
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>{movie.REVIEW_MOVIE_REVIEW}</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    );
}
