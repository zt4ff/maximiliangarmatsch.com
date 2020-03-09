import React from 'react';
import { Grid } from '@material-ui/core';
import { Box, Text } from '../../../components/Base/Base';
import ImageMaximilian from '../../Landingpage/components/ImageMaximilian';
import IconCheckpoint from '../Icons/IconCheckpoint';
import Line from '../components/Line';

export default function Partner() {
    return (
        <Box
            id="Partner"
            position="relative"
            minHeight="400px"
            mt="2rem"
            height="calc(100vh - 6rem)"
        >
            <Box as={Grid} container>
                <Box
                    as={Grid}
                    item
                    xs={12}
                    css={`
                        line-height: 1.2rem;
                        text-align: center;
                    `}
                >
                    <Text color="green">
                        <Text color="white">
                            Your Partner <br />
                        </Text>
                        Maximilian Garmatsch, B.Sc <br />
                        Senior Web Engineer <br />
                        Product Manager <br />
                    </Text>
                    <Box as="div">
                        <ImageMaximilian margin="1rem 0" />
                    </Box>

                    <Text color="green">
                        Developer since 2001 <br />
                        Professional since 2009 <br />
                        Team Lead since 2018 <br />
                    </Text>
                </Box>
            </Box>
            <Text
                as="p"
                textAlign="center"
                position="absolute"
                lineHeight="1.2rem"
                left="50%"
                css={`
                    transform: translateX(-50%);
                `}
                bottom="100px"
            >
                Meet the roles <br /> in our team!
            </Text>
            <Box as={Grid} container justify="center">
                <IconCheckpoint
                    absolute={true}
                    left="50%"
                    bottom="50px"
                    transform="translateX(-50%)"
                    color="white"
                    size="30px"
                />
                <Line
                    absolute={true}
                    position="vertical"
                    length="50px"
                    transform="translateX(-50%)"
                    bottom="0px"
                    left="50%"
                />
            </Box>
        </Box>
    );
}
