import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Media from 'react-media';
import { device } from '../../config/device';
import PortfolioIcons from '../portfolio-icons/portfolio-icons';
import BackToHome from '../back-to-home/back-to-home';

export default function Footer() {
    let location = useLocation();

    return (
        <Box>
            <footer>
                <Navigation>
                    {location.pathname === '/' && (
                        <Link to="/impressum">Impressum</Link>
                    )}
                    <Media queries={{ tablet: device.tablet }}>
                        {matches =>
                            !matches.tablet && (
                                <>
                                    {location.pathname !== '/' && (
                                        <BackToHome
                                            style={BackToHomeStyle}
                                            arrowStyle={BackToHomeArrowStyle}
                                        />
                                    )}
                                    <PortfolioIcons />
                                </>
                            )
                        }
                    </Media>
                </Navigation>
            </footer>
        </Box>
    );
}

const Box = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #191919;
    @media ${device.tablet} {
        display: flex;
        justify-content: flex-end;
        background: transparent;
        position: initial;
        margin-top: 7rem;
    }
`;

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 5px 35px;
    align-items: center;
    a {
        color: #ffffff;
        text-decoration: none;
    }
    @media ${device.tablet} {
        padding: 0;
    }
`;
const BackToHomeStyle = {
    fontSize: '1rem',
    fontWeight: '300',
};
const BackToHomeArrowStyle = {
    marginRight: '3px',
};
