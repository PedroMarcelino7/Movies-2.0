import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

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
    onChange: (value: string) => void;
}

export default function AutoComplete({ name, required, movies, onChange }: Props) {
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
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Movie"
                    name={name}
                    required={required}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
        />
    );
}
