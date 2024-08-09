interface Props {
    name: string,
    placeholder: string,
    required: boolean,
    value?: any
}

const textarea = {
    color: '#fff',
    backgroundColor: '#121212',
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    maxHeight: '400px',
    minHeight: '150px',
    padding: '1rem',
    fontSize: '1.2rem',
    borderRadius: '5px'
}

export default function TextArea({ name, placeholder, required, value }: Props) {
    return (
        <textarea
            placeholder={placeholder}
            style={textarea}
            name={name}
            required={required}
            defaultValue={value}
        />
    )
}