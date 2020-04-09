import React from 'react';
import { FormattedMessage } from 'react-intl';
import DeviceProvider from '../../../helpers/DeviceProvider';
import BackgroundLayerDesktop from '../Landingpage/components/BackgroundLayerDesktop';
import { Box, Text } from '../../components/Base/Base';
import IconButtonBig from '../Landingpage/components/IconButtonBig';
import CheckpointYears from './sections/CheckpointYears';
import CheckpointLines from './sections/CheckpointLines';
import CheckpointStartups from './sections/CheckpointStartups';
import CheckpointExperts from './sections/CheckpointExperts';
import CheckpointDevelopers from './sections/CheckpointDevelopers';
import CheckpointProjects from './sections/CheckpointProjects';

export default function AchievementsDesktop() {
    return (
        <DeviceProvider>
            <BackgroundLayerDesktop>
                <Box
                    maxWidth={{ lg: '465px', xl: '500px', xxl: '600px' }}
                    width="100%"
                    height="80vh"
                    position="absolute"
                    top="50%"
                    right={{ lg: '10%', xl: '10%', xxl: '10%' }}
                    css={`
                        transform: translateY(calc(-50%));
                        box-shadow: 3px 3px 12px rgba(13, 233, 154, 0.31);
                    `}
                    zIndex="5"
                    bg="#191919"
                    borderRadius="54px"
                    border="1px solid rgba(27, 25, 25, 0.5)"
                >
                    <Box
                        position="absolute"
                        maxWidth="400px"
                        width="100%"
                        height="100%"
                        maxHeight="80%"
                        left="50%"
                        top="50%"
                        mt="30px"
                        css={`
                            transform: translate(-50%, -50%);
                        `}
                    >
                        <Box
                            textAlign="center"
                            width="100%"
                            height="20px"
                            position="absolute"
                            top="-80px"
                        >
                            <Text
                                as="h1"
                                fontSize="38px"
                                lineHeight="48px"
                                color="green"
                            >
                                <FormattedMessage defaultMessage="My Achievements" />
                            </Text>
                        </Box>
                        <Box position="absolute" left="0%" top="9%">
                            <CheckpointYears />
                        </Box>
                        <Box position="absolute" right="4%" top="7%">
                            <CheckpointLines />
                        </Box>
                        <Box
                            position="absolute"
                            left="50%"
                            css={`
                                transform: translateX(-50%);
                            `}
                            top="24%"
                        >
                            <CheckpointStartups />
                        </Box>
                        <Box position="absolute" left="-5%" bottom="32%">
                            <CheckpointExperts />
                        </Box>
                        <Box position="absolute" left="34%" bottom="22%">
                            <CheckpointDevelopers />
                        </Box>
                        <Box position="absolute" right="-2%" bottom="35%">
                            <CheckpointProjects />
                        </Box>
                        <Box
                            m="0 20px"
                            width="calc(100% - 40px)"
                            height="50px"
                            position="absolute"
                            bottom="0"
                        >
                            <IconButtonBig to="/foryouiwill">
                                <FormattedMessage defaultMessage="Learn even more" />
                            </IconButtonBig>
                        </Box>
                    </Box>
                </Box>
            </BackgroundLayerDesktop>
        </DeviceProvider>
    );
}
