import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../Base/Base';

export default function NavigationLink({ to, children, style }) {
    return (
        <Text
            as={Link}
            color="#ffffff"
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
