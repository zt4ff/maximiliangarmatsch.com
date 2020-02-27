import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../Base/Base';

export default function NavigationLink({ to, children, style, fontSize }) {
    return (
        <Text
            as={Link}
            color="#ffffff"
            fontSize={fontSize ? fontSize : { xl: '18px', xxl: '25px' }}
            css={`
                text-decoration: none;
            `}
            to={to}
            style={style}
        >
            {children}
        </Text>
    );
}
