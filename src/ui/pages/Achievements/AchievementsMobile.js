import React from 'react';
import { FormattedMessage } from 'react-intl';
import DeviceProvider from '../../../helpers/DeviceProvider';
import { Box, Text } from '../../components/Base/Base';
import IconButtonBig from '../Landingpage/components/IconButtonBig';
import CheckpointYears from './sections/CheckpointYears';
import CheckpointLines from './sections/CheckpointLines';
import CheckpointStartups from './sections/CheckpointStartups';
import CheckpointExperts from './sections/CheckpointExperts';
import CheckpointDevelopers from './sections/CheckpointDevelopers';
import CheckpointProjects from './sections/CheckpointProjects';

export default function AchievementsMobile() {
    return (
        <DeviceProvider>
            <Box
                position="absolute"
                maxWidth="400px"
                width="100%"
                height="calc(100vh - 150px)"
                maxHeight="500px"
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
                    top="-50px"
                >
                    <Text
                        as="h1"
                        fontSize="18px"
                        lineHeight="18px"
                        color="white"
                    >
                        <FormattedMessage defaultMessage="My Achievements" />
                    </Text>
                </Box>
                <Box position="absolute" left="20px" top="15px">
                    <CheckpointYears />
                </Box>
                <Box position="absolute" right="20px" top="15px">
                    <CheckpointLines />
                </Box>
                <Box
                    position="absolute"
                    left="50%"
                    css={`
                        transform: translateX(-50%);
                    `}
                    top="100px"
                >
                    <CheckpointStartups />
                </Box>
                <Box position="absolute" left="5px" bottom="210px">
                    <CheckpointExperts />
                </Box>
                <Box position="absolute" left="30%" bottom="150px">
                    <CheckpointDevelopers />
                </Box>
                <Box position="absolute" right="10px" bottom="180px">
                    <CheckpointProjects />
                </Box>
                <Box
                    m="0 20px"
                    width="calc(100% - 40px)"
                    height="50px"
                    position="absolute"
                    bottom="40px"
                >
                    <IconButtonBig to="/foryouiwill">
                        <FormattedMessage defaultMessage="Learn even more" />
                    </IconButtonBig>
                </Box>
            </Box>
        </DeviceProvider>
    );
}
