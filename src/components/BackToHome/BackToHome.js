import React from 'react';
import styled from 'styled-components';
import NavigationLink from '../Footer/NavigationLink';

export default function BackToHome({ style, arrowStyle }) {
    return (
        <NavigationLink to="/" style={style}>
            <Arrow style={arrowStyle} />
            Home
        </NavigationLink>
    );
}

const Arrow = styled.span`
    border: solid #fff;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    margin-bottom: 2px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`;
