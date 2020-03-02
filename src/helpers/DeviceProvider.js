import React from 'react';
import Media from 'react-media';
import DesktopTemplate from '../templates/DesktopTemplate';
import { device } from '../config/device';

export default function DeviceProvider({ children }) {
    return (
        <>
            <Media query={device.laptop}>
                <DesktopTemplate>{children}</DesktopTemplate>
            </Media>
        </>
    );
}
