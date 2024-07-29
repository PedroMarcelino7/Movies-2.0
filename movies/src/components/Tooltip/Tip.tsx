import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import { ReactElement } from 'react';

interface Props {
    children: ReactElement,
    name: string,
    placement: TooltipProps['placement']
}

export default function Tip({ children, name, placement }: Props) {
    return (
        <Tooltip title={name} placement={placement}>
            {children}
        </Tooltip>
    );
}
