import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from '../../config/theme';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

export default function Footer() {
    const matches = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
    return <>{matches ? <DesktopNavigation /> : <MobileNavigation />}</>;
}
