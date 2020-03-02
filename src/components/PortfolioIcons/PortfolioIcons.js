import React from 'react';
import { Flex } from '../Base/Base';
import GitHub from './GitHub.png';
import LinkedIn from './LinkedIn.png';
import Icon from './Icon';

export default function PortfolioIcons() {
    return (
        <Flex
            flexDirection={{ md: 'row', lg: 'column' }}
            justifyContent={{ md: 'space-between' }}
            position={{ sm: 'inherit', lg: 'relative' }}
            height={{ sm: '100%', lg: '110px', xxl: '130px' }}
            width={{ md: '84px', lg: 'auto' }}
        >
            <Icon
                to="https://github.com/maximiliangarmatsch"
                alt="GitHub"
                iconSrc={GitHub}
            />
            <Icon
                to="https://www.linkedin.com/in/maximilian-garmatsch/"
                alt="LinkedIn"
                iconSrc={LinkedIn}
            />
        </Flex>
    );
}
