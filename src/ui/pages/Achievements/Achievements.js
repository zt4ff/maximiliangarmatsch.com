import React, { useContext } from 'react';
import { SizeContext } from '../../../context/SizeContext';
import { FormatValuesContext } from '../../../context/FormatValuesContext';
import { Text } from '../../components/Base/Base';
import AchievementsDesktop from './AchievementsDesktop';
import AchievementsMobile from './AchievementsMobile';

export default function Achievements() {
    const isDesktop = useContext(SizeContext);
    var formatValues = {
        header: chunks => (
            <Text fontSize="26px" fontWeight="bold" lineHeight="28px">
                {chunks} <br />
            </Text>
        ),
        subheader: chunks => (
            <Text fontSize="18px" fontWeight="bold" lineHeight="24px">
                {chunks} <br />
            </Text>
        ),
        rest: chunks => (
            <Text fontSize="12px" fontWeight="300">
                {chunks} <br />
            </Text>
        ),
    };
    return (
        <FormatValuesContext.Provider value={formatValues}>
            {isDesktop ? <AchievementsDesktop /> : <AchievementsMobile />}
        </FormatValuesContext.Provider>
    );
}
