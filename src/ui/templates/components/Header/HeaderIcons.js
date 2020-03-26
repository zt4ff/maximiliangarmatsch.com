import React from 'react';
import { Flex } from '../../../components/Base/Base';
import Icon from '../../../components/PortfolioIcons/Icon';

export default function HeaderIcons() {
    const iconHeight = {
        sm: '26px',
        md: '26px',
        lg: '26px',
        xl: '32px',
        xxl: '36px',
    };
    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            width={{
                sm: '70px',
                md: '90px',
                lg: '110px',
                xl: '110px',
                xxl: '130px',
            }}
        >
            <Icon
                iconSrc="/assets/IconEmail.png"
                alt="Icon email"
                to="/45min"
                margin="0"
                height={iconHeight}
            />
            <Icon
                iconSrc="/assets/IconImpressum.png"
                alt="Icon impressum"
                to="/impressum"
                margin="0"
                height={iconHeight}
            />
        </Flex>
    );
}
