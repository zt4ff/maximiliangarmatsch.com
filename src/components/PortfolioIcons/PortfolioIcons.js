import React from 'react';
import { Flex } from '../Base/Base';
import Icon from './Icon';

export default function PortfolioIcons() {
    return (
        <Flex
            flexDirection={{ sm: 'row', md: 'column' }}
            justifyContent={{ md: 'space-between' }}
            alignItems="end"
            position={{ sm: 'inherit', md: 'relative' }}
            height={{ sm: '100%', md: '110px', xxl: '130px' }}
            width={{ md: '84px' }}
        >
            <Icon
                to="https://github.com/maximiliangarmatsch"
                alt="GitHub"
                iconSrc="/assets/GitHub.png"
            />
            <Icon
                to="https://www.linkedin.com/in/maximilian-garmatsch/"
                alt="LinkedIn"
                iconSrc="/assets/LinkedIn.png"
            />
        </Flex>
    );
}
