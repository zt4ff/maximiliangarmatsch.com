import React from 'react';
import NavigationLink from '../Footer/NavigationLink';
import { Box } from '../Base/Base';

export default function BackToHome({ style, arrowStyle }) {
    return (
        <Box
            position={{ lg: 'absolute' }}
            top={{ lg: '5.6rem', xl: '6.6rem', xxl: '7.6rem' }}
            mt={{ lg: '5px' }}
        >
            <NavigationLink to="/" fontSize={{ xxl: '22px' }} style={style}>
                <Box
                    as="span"
                    display="inline-block"
                    p={{ sm: '3px', xxl: '5px' }}
                    mb="2px"
                    css={`
                        border: solid #fff;
                        border-width: 0 2px 2px 0;
                        transform: rotate(135deg);
                        -webkit-transform: rotate(135deg);
                    `}
                    style={arrowStyle}
                />
                Home
            </NavigationLink>
        </Box>
    );
}
