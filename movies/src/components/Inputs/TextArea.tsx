interface Props {
    name: string,
    rows: number
}

const textarea = {
    color: '#fff',
    backgroundColor: '#121212',
    width: '100%',
    maxWidth: '100%',
    padding: '1rem',
    fontSize: '1.2rem',
    borderRadius: '5px'
}

export default function TextArea({ name, rows }: Props) {
    return (
        <textarea placeholder="Review" style={textarea} rows={rows} name={name} />
    )
}