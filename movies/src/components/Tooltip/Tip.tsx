import Tooltip from '@mui/material/Tooltip';
import { ReactElement } from 'react';

interface Props {
    children: ReactElement,
    name: string,
    placement: string
}

export default function Tip({ children, name, placement }: Props) {
    return (
        <Tooltip title={name} placement={placement}>
            {children}
        </Tooltip>
    );
}
