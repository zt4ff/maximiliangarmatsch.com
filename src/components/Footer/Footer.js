import React from 'react';
import Media from 'react-media';
import { device } from '../../config/device';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

export default function Footer() {
    return (
        <Media queries={{ tablet: device.tablet }}>
            {matches =>
                matches.tablet ? <DesktopNavigation /> : <MobileNavigation />
            }
        </Media>
    );
}
