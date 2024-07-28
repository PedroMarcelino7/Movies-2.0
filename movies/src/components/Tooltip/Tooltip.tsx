import Tooltip from '@mui/material/Tooltip';
import { ReactElement } from 'react';

interface Props {
    children: ReactElement,
    name: String
}

export default function TooltipTop({ children, name }: Props) {
    return (
        <Tooltip title={name} placement="top">
            {children}
        </Tooltip>
    );
}
