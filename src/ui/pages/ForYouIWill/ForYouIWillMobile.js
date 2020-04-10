import React from 'react';
import { FormattedMessage } from 'react-intl';
import DeviceProvider from '../../../helpers/DeviceProvider';
import { Box, Text } from '../../components/Base/Base';
import IconButtonBig from '../Landingpage/components/IconButtonBig';
import SectionCheckpoint from './components/SectionCheckpoint';

export default function ForYouIWill() {
    let messageValues = {
        first: chunks => (
            <Text
                color="green"
                fontSize="20px"
                lineHeight="18px"
                fontWeight="400"
            >
                {chunks}
            </Text>
        ),
        green: chunks => <Text color="green">{chunks}</Text>,
        linebreak: <br />,
        a: chunks => (
            <Text as="a" textDecoration="underline" href="#" color="green">
                {chunks}
            </Text>
        ),
    };

    return (
        <DeviceProvider>
            <Box p="0 20px">
                <Text
                    as="h1"
                    fontWeight="bold"
                    color="green"
                    fontSize="28px"
                    lineHeight="28px"
                >
                    <FormattedMessage defaultMessage="For you, I will..." />
                </Text>
                <SectionCheckpoint>
                    <FormattedMessage
                        defaultMessage="<first>Understand</first> your needs <green>in days.</green> My budget and time estimations will allow confident decision making."
                        values={messageValues}
                    />
                </SectionCheckpoint>
                <SectionCheckpoint>
                    <FormattedMessage
                        defaultMessage="<first>Create</first> a prototype <green>in weeks.</green> My first goal is a presentable foundation that we can build on. I’m an engineer first and an entrepreneur second.
                        {linebreak}
                        "
                        values={messageValues}
                    />
                </SectionCheckpoint>
                <SectionCheckpoint>
                    <FormattedMessage
                        defaultMessage="<first>Manage</first> your project <green>long-term</green>. You want to continously add components or scale your product? I will lead the digital team that will do it."
                        values={messageValues}
                    />
                </SectionCheckpoint>
                <Box width="100%" height="50px" mt="15px">
                    <IconButtonBig to="/letsgetstarted">
                        <FormattedMessage defaultMessage="Last step" />
                    </IconButtonBig>
                </Box>
            </Box>
        </DeviceProvider>
    );
}
