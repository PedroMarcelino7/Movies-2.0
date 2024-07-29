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

interface Movie {
    MOVIE_TITLE: string;
    MOVIE_DATE: string;
    MOVIE_IMG: string;
    MOVIE_RATING: number;
    MOVIE_REVIEW: string;
}

interface Props {
    handleOpenEditReview: () => void;
    movie: Movie;
}

export default function MovieCard({ handleOpenEditReview, movie }: Props) {
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
                    title={movie.MOVIE_TITLE}
                    subheader={movie.MOVIE_DATE}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={movie.MOVIE_IMG}
                    alt={movie.MOVIE_TITLE}
                />
                <CardActions disableSpacing>
                    <MovieRate rating={movie.MOVIE_RATING} />
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
                        <Typography paragraph>{movie.MOVIE_REVIEW}</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    );
}
