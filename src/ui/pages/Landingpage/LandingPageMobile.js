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
                <Grid container spacing={2} style={{ marginTop: '4rem' }}>
                    <Grid item xs={6}>
                        <IconButtonBig href="https://drive.google.com/file/d/1-xzY0WGZLQCKny2e5iR5I_HzVYZywGWD/view?usp=sharing">
                            <FormattedMessage defaultMessage="Do Business digital" />
                        </IconButtonBig>
                    </Grid>
                    <Grid item xs={6}>
                        <IconButtonBig href="https://drive.google.com/file/d/1-24y50zMtUwQBaF6YDM10jEvp9x-odwd/view?usp=sharing">
                            <FormattedMessage defaultMessage="Start-Up fresh" />
                        </IconButtonBig>
                    </Grid>
                </Grid>
            </Box>
        </DeviceProvider>
    );
}
