import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Box, Flex } from '../../../components/Base/Base';
import { SizeContext } from '../../../../context/SizeContext';
import IconButtonBig from './IconButtonBig';

export default function PicthDeckButtons() {
    const isDesktop = useContext(SizeContext);

    const height = {
        sm: '72px',
        md: '80px',
        lg: '60px',
        xl: '60px',
        xxl: '100px',
    };
    const width = {
        sm: '160px',
        md: '180px',
        lg: '225px',
        xl: '225px',
        xxl: '350px',
    };

    return (
        <Flex
            style={{ marginTop: '2rem' }}
            fontSize="16px"
            lineHeight="20px"
            justifyContent={{
                sm: 'center',
                md: 'center',
                lg: 'start',
                xl: 'start',
                xxl: 'start',
            }}
        >
            <Box height={height} width={width} mr={{ sm: '30px' }}>
                <IconButtonBig href="https://drive.google.com/file/d/1-xzY0WGZLQCKny2e5iR5I_HzVYZywGWD/view?usp=sharing">
                    <FormattedMessage defaultMessage="Do Business digital" />
                </IconButtonBig>
            </Box>
            <Box height={height} width={width}>
                <IconButtonBig href="https://drive.google.com/file/d/1-24y50zMtUwQBaF6YDM10jEvp9x-odwd/view?usp=sharing">
                    {isDesktop ? (
                        <FormattedMessage defaultMessage="Start-Up fresh" />
                    ) : (
                        <>
                            <FormattedMessage defaultMessage="Start-Up" />
                            <br />
                            <FormattedMessage defaultMessage="fresh" />
                        </>
                    )}
                </IconButtonBig>
            </Box>
        </Flex>
    );
}
