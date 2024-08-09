import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect } from 'react';

interface MovieOption {
    id: number;
    label: string;
    releaseDate: string;
    img: string;
}

interface Props {
    name: string;
    required: boolean;
    movies: MovieOption[];
    handleSearch: (value: string) => void;
    handleSelectedMovie: (e: any, value: MovieOption | null) => void,
    value?: any
}

export default function AutoComplete({ name, required, movies, handleSearch, handleSelectedMovie, value }: Props) {
    useEffect(() => {
        console.log('movies recebidos:', movies)
    }, [movies])

    return (
        <Autocomplete
            disablePortal
            options={movies}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
                <li {...props} key={option.id}>
                    {option.label}
                </li>
            )}
            sx={{ width: '100%' }}
            onChange={(e, value) => handleSelectedMovie(e, value)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Movie"
                    name={name}
                    required={required}
                    onChange={(e) => handleSearch(e.target.value)}
                    value={value}
                />
            )}
        />
    );
}
