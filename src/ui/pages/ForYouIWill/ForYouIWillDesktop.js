import React from 'react';
import { FormattedMessage } from 'react-intl';
import DeviceProvider from '../../../helpers/DeviceProvider';
import BackgroundLayerDesktop from '../Landingpage/components/BackgroundLayerDesktop';
import { Box, Text } from '../../components/Base/Base';
import IconButtonBig from '../Landingpage/components/IconButtonBig';
import SectionCheckpoint from './components/SectionCheckpoint';

export default function ForYouIWillDesktop() {
    let messageValues = {
        first: chunks => (
            <Text
                color="green"
                fontSize="26px"
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
                    <Box p="0 40px">
                        <Text
                            as="h1"
                            fontWeight="bold"
                            color="green"
                            fontSize="38px"
                            lineHeight="48px"
                            mb="60px"
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
                        <a> Read more about my tech-stack </a> "
                                values={messageValues}
                            />
                        </SectionCheckpoint>
                        <SectionCheckpoint>
                            <FormattedMessage
                                defaultMessage="<first>Manage</first> your project <green>long-term</green>. You want to continously add components or scale your product? I will lead the digital team that will do it."
                                values={messageValues}
                            />
                        </SectionCheckpoint>
                        <Box width="100%" height="50px" mt="60px">
                            <IconButtonBig to="/letsgetstarted">
                                <FormattedMessage defaultMessage="Last step" />
                            </IconButtonBig>
                        </Box>
                    </Box>
                </Box>
            </BackgroundLayerDesktop>
        </DeviceProvider>
    );
}
