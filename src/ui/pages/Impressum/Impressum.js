import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box } from '../../components/Base/Base';
import NavLinkHome from '../../templates/components/Navigation/NavLinkHome';
import theme from '../../../config/theme';
import DeviceProvider from '../../../helpers/DeviceProvider';
import TextAdress from './components/TextAdress';
import TextPrivacyPolicy from './components/TextPrivacyPolicy';

export default function Impressum() {
    const isDesktop = useMediaQuery(`(min-width:${theme.breakpoints.md})`);
    return (
        <DeviceProvider>
            <Box lineHeight="1.3rem" mt="2rem" p="0 15px">
                <TextAdress />
                <TextPrivacyPolicy />
                {!isDesktop && (
                    <Box textAlign="center" m="2rem">
                        <NavLinkHome />
                    </Box>
                )}
            </Box>
        </DeviceProvider>
    );
}
