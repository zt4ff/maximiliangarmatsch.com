import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Media from 'react-media';
import { device } from '../../global/style/device';

function Header() {
    let location = useLocation();
    return (
        <Box>
            <header>
                <Logotext>Maximilian Garmatsch</Logotext>
                <Media query={device.tablet}>
                    {location.pathname !== '/' && (
                        <BackToHome href="/">
                            <svg
                                style={{ marginRight: '3px' }}
                                width="10"
                                height="10"
                                viewBox="0 0 12 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.58894 9.80685L10.7959 2.60685C11.0508 2.35118 11.1937 2.00474 11.1931 1.64373C11.1926 1.28272 11.0486 0.936723 10.7929 0.68185C10.5373 0.426977 10.1908 0.284107 9.82982 0.28467C9.46881 0.285232 9.12282 0.429181 8.86794 0.68485L0.701943 8.84485C0.455086 9.09249 0.313179 9.42575 0.305729 9.77533C0.298279 10.1249 0.42586 10.4639 0.661943 10.7218L8.86194 18.9389C8.98814 19.0654 9.13804 19.1659 9.30308 19.2346C9.46812 19.3033 9.64507 19.3388 9.82382 19.339C10.0026 19.3393 10.1796 19.3044 10.3449 19.2362C10.5101 19.1681 10.6603 19.0681 10.7869 18.9419C10.9135 18.8157 11.014 18.6658 11.0827 18.5007C11.1514 18.3357 11.1868 18.1587 11.1871 17.98C11.1874 17.8012 11.1525 17.6242 11.0843 17.4589C11.0162 17.2937 10.9161 17.1434 10.7899 17.0168L3.58894 9.80685Z"
                                    fill="white"
                                />
                            </svg>
                            Home
                        </BackToHome>
                    )}
                </Media>
            </header>
        </Box>
    );
}

const Box = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #191919;
    @media ${device.tablet} {
        position: initial;
        background: transparent;
    }
`;

const Logotext = styled.h1`
    text-align: center;
    font-size: 23px;
    line-height: 27px;
    @media ${device.tablet} {
        text-align: left;
        font-weight: normal;
        font-size: 3rem;
        line-height: 84px;
    }
`;

const BackToHome = styled.a`
    position: relative;
    bottom: 3rem;
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: normal;
`;
export default Header;
