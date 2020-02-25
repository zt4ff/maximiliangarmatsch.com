import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function BackToHome({ style, arrowStyle }) {
    return (
        <Box to="/" style={style}>
            <Arrow style={arrowStyle} />
            Home
        </Box>
    );
}
const Box = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-weight: normal;
`;
const Arrow = styled.span`
    border: solid #fff;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    margin-bottom: 2px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`;
