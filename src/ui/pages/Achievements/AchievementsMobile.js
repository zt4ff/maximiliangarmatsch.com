import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box } from '../../components/Base/Base';
import MobileStepsTemplate from '../../templates/MobileStepsTemplate';
import CheckpointYears from './sections/CheckpointYears';
import CheckpointLines from './sections/CheckpointLines';
import CheckpointStartups from './sections/CheckpointStartups';
import CheckpointExperts from './sections/CheckpointExperts';
import CheckpointDevelopers from './sections/CheckpointDevelopers';
import CheckpointProjects from './sections/CheckpointProjects';

export default function AchievementsMobile() {
    return (
        <MobileStepsTemplate
            title={<FormattedMessage defaultMessage="My Achievements" />}
            to="/foryouiwill"
            ButtonText={<FormattedMessage defaultMessage="Learn even more" />}
        >
            <Box
                position="relative"
                maxWidth="400px"
                width="100%"
                height="100%"
                maxHeight={{ _: '80%', sm: '90%', md: '550px' }}
                left="50%"
                top={{ _: '40%', sm: '40%', md: '50%' }}
                css={`
                    transform: translate(-50%, -50%);
                `}
            >
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
            </Box>
        </MobileStepsTemplate>
    );
}
