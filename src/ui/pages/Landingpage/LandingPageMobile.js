import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import DeviceProvider from '../../../helpers/DeviceProvider';
import { Box } from '../../components/Base/Base';
import ImageMaximilian from './components/ImageMaximilian';
import TextWelcomeMobile from './components/TextWelcomeMobile';
import IconButtonBig from './components/IconButtonBig';

export default function LandingPageMobile() {
    return (
        <DeviceProvider>
            <Box textAlign="center" p="0 25px">
                <ImageMaximilian />
                <TextWelcomeMobile />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <IconButtonBig>
                            <FormattedMessage defaultMessage="Do Business digital" />
                        </IconButtonBig>
                    </Grid>
                    <Grid item xs={6}>
                        <IconButtonBig>
                            <FormattedMessage defaultMessage="Start-Up fresh" />
                        </IconButtonBig>
                    </Grid>
                </Grid>
            </Box>
        </DeviceProvider>
    );
}
