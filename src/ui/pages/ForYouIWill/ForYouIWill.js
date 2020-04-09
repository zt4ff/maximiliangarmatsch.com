import React, { useContext } from 'react';
import { SizeContext } from '../../../context/SizeContext';
import ForYouIWillMobile from './ForYouIWillMobile';
import ForYouIWillDesktop from './ForYouIWillDesktop';

export default function ForYouIWill() {
    const isDesktop = useContext(SizeContext);

    return <> {isDesktop ? <ForYouIWillDesktop /> : <ForYouIWillMobile />}</>;
}
