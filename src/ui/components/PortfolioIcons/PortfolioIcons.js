import React from 'react';
import { Flex } from '../Base/Base';
import Icon from './Icon';

export default function PortfolioIcons() {
    return (
        <Flex
            flexDirection={{ sm: 'row', md: 'column' }}
            justifyContent={{ md: 'space-between' }}
            alignItems="flex-end"
            position={{ sm: 'inherit', md: 'relative' }}
            height={{ sm: '100%', md: '110px', xxl: '130px' }}
            width={{ md: '84px' }}
        >
            <Icon
                height={{ _: '30px', sm: '30px', md: '32px', xxl: '50px' }}
                width={{ _: '30px', sm: '30px', md: '32px', xxl: '50px' }}
                to="https://github.com/maximiliangarmatsch"
                alt="GitHub"
                iconSrc="/assets/GitHub.png"
            />
            <Icon
                height={{ _: '30px', sm: '30px', md: '32px', xxl: '50px' }}
                width={{ _: '30px', sm: '30px', md: '32px', xxl: '50px' }}
                to="https://www.linkedin.com/in/maximilian-garmatsch/"
                alt="LinkedIn"
                iconSrc="/assets/LinkedIn.png"
            />
        </Flex>
    );
}
