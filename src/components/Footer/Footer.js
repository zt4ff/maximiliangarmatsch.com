import React from 'react';
import Media from 'react-media';
import { device } from '../../config/device';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

export default function Footer() {
    return (
        <Media queries={{ laptop: device.laptop }}>
            {matches =>
                matches.laptop ? <DesktopNavigation /> : <MobileNavigation />
            }
        </Media>
    );
}
