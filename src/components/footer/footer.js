import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Media from 'react-media';
import { device } from '../../global/style/device';
import PortfolioIcons from '../portfolio-icons/portfolio-icons';

export default function Footer() {
    return (
        <Box>
            <footer>
                <nav>
                    <Link to="/impressum">Impressum</Link>
                    <Media queries={{ tablet: device.tablet }}>
                        {matches => !matches.tablet && <PortfolioIcons />}
                    </Media>
                </nav>
            </footer>
        </Box>
    );
}

const Box = styled.div`
    & footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #191919;
    }
    & nav {
        display: flex;
        justify-content: space-between;
        padding: 5px 35px;
        align-items: center;
    }
    & nav ul li {
        display: inline-block;
    }
    & footer a {
        color: #ffffff;
        text-decoration: none;
    }
    @media ${device.tablet} {
        footer {
            display: flex;
            justify-content: flex-end;
            background: transparent;
            position: initial;
            margin-top: 7rem;
        }
        nav {
            padding: 0;
        }
    }
`;
