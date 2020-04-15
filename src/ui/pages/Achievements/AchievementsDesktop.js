import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box } from '../../components/Base/Base';
import DesktopStepsTemplate from '../../templates/DesktopStepsTemplate';
import CheckpointYears from './sections/CheckpointYears';
import CheckpointLines from './sections/CheckpointLines';
import CheckpointStartups from './sections/CheckpointStartups';
import CheckpointExperts from './sections/CheckpointExperts';
import CheckpointDevelopers from './sections/CheckpointDevelopers';
import CheckpointProjects from './sections/CheckpointProjects';

export default function AchievementsDesktop() {
    return (
        <DesktopStepsTemplate
            title={<FormattedMessage defaultMessage="My Achievements" />}
            to="/foryouiwill"
            ButtonText={<FormattedMessage defaultMessage="Learn even more" />}
        >
            <Box
                position="relative"
                maxWidth="420px"
                width="100%"
                height="100%"
                maxHeight="80%"
                left="50%"
                css={`
                    transform: translateX(-50%);
                `}
            >
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
                <Box position="absolute" left="34%" bottom="20%">
                    <CheckpointDevelopers />
                </Box>
                <Box position="absolute" right="-2%" bottom="35%">
                    <CheckpointProjects />
                </Box>
            </Box>
        </DesktopStepsTemplate>
    );
}
