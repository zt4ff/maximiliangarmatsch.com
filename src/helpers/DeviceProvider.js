import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DesktopTemplate from '../templates/DesktopTemplate';
import MobileTemplate from '../templates/MobileTemplate';
import theme from '../config/theme';

export default function DeviceProvider({ children }) {
    const matches = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
    return (
        <>
            {matches ? (
                <DesktopTemplate>{children}</DesktopTemplate>
            ) : (
                <MobileTemplate>{children}</MobileTemplate>
            )}
        </>
    );
}
