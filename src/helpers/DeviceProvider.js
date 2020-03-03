import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TemplateDesktop from '../ui/templates/TemplateDesktop';
import TemplateMobile from '../ui/templates/TemplateMobile';
import theme from '../config/theme';

export default function DeviceProvider({ children }) {
    const matches = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
    return (
        <>
            {matches ? (
                <TemplateDesktop>{children}</TemplateDesktop>
            ) : (
                <TemplateMobile>{children}</TemplateMobile>
            )}
        </>
    );
}
