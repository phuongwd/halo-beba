import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { GrowthChart, chartTypes } from './GrowthChart';

const dumbData = {
    /* ******* 0-2 ******* */
    lineChartData: [{ measurementDay: 269, height: 2, length: 45 }, { measurementDay: 330, height: 4.5, length: 55  }, { measurementDay: 400, height: 7, length: 70 }, { measurementDay: 1000, height: 8, length: 80 }, { measurementDay: 1000, height: 12, length: 87 }], 
    childBirthDate: new Date("06/09/2018"),   

    /* ******* 2-5 ******* */
    lineChartData2: [{ measurementDay: 269, height: 9.3, length: 88 }, { measurementDay: 330, height: 10.8, length: 95 }, { measurementDay: 400, height: 13, length: 100 }, { measurementDay: 1000, height: 16.4, length: 103 }],
    childBirthDate2: new Date("06/09/2017"), 

    /* ******* TEST ALL DATA IN X AND Y FOR 2-5 ******* */
    lineChartData3: [
        { measurementDay: 269, height: 2, length: 45 }, { measurementDay: 330, height: 4.5, length: 55  }, { measurementDay: 400, height: 7, length: 70 }, { measurementDay: 1000, height: 8, length: 80 }, { measurementDay: 1000, height: 12, length: 87 },
        { measurementDay: 269, height: 9.3, length: 88 }, { measurementDay: 330, height: 10.8, length: 95 }, { measurementDay: 400, height: 13, length: 100 }, { measurementDay: 1000, height: 16.4, length: 103 }
    ],

}


storiesOf('GrowthChart', module)
    .add('Tezina za visinu devojcice 0-2 godine', () => (
        <View style={{ flex: 1, padding: 24, justifyContent: 'center', alignItems: 'stretch', backgroundColor: 'white' }}>
            <GrowthChart
                title="Tezina za visinu"
                lineChartData={dumbData.lineChartData}
                childGender="female"
                showFullscreen={false}
                chartType={chartTypes.height_length}
                childBirthDate={dumbData.childBirthDate}

            />
        </View>
    ))
    .add('Tezina za visinu devojcice 2-5 godine', () => (
        <View style={{ flex: 1, padding: 24, justifyContent: 'center', alignItems: 'stretch', backgroundColor: 'white' }}>
            <GrowthChart
                title="Tezina za visinu"
                lineChartData={dumbData.lineChartData2}
                childGender="female"
                showFullscreen={true}
                chartType={chartTypes.height_length}
                childBirthDate={dumbData.childBirthDate2}

            />
        </View>
    ))
    .add('Tezina za visinu decaci 0-2 godine', () => (
        <View style={{ flex: 1, padding: 24, justifyContent: 'center', alignItems: 'stretch', backgroundColor: 'white' }}>
            <GrowthChart
                title="Tezina za visinu"
                lineChartData={dumbData.lineChartData}
                childGender="female"
                showFullscreen={false}
                chartType={chartTypes.height_length}
                childBirthDate={dumbData.childBirthDate}

            />
        </View>
    ))
    .add('Tezina za visinu decaci 2-5 godine', () => (
        <View style={{ flex: 1, padding: 24, justifyContent: 'center', alignItems: 'stretch', backgroundColor: 'white' }}>
            <GrowthChart
                title="Tezina za visinu"
                lineChartData={dumbData.lineChartData2}
                childGender="male"
                showFullscreen={false}
                chartType={chartTypes.height_length}
                childBirthDate={dumbData.childBirthDate2}

            />
        </View>
    ))
    .add('Visina za uzrast devojcice 0 - 5 g', () => (
        <View style={{ flex: 1, padding: 24, justifyContent: 'center', alignItems: 'stretch', backgroundColor: 'white' }}>
            <GrowthChart
                title="Visina za uzrast"
                lineChartData={dumbData.lineChartData}
                childGender="female"
                showFullscreen={false}
                chartType={chartTypes.length_age}
                childBirthDate={dumbData.childBirthDate}

            />
        </View>
    ))
    .add('Visina za uzrast decaci 0 - 5 g', () => (
        <View style={{ flex: 1, padding: 24, justifyContent: 'center', alignItems: 'stretch', backgroundColor: 'white' }}>
            <GrowthChart
                title="Visina za uzrast"
                lineChartData={dumbData.lineChartData}
                childGender="male"
                showFullscreen={false}
                chartType={chartTypes.length_age}
                childBirthDate={dumbData.childBirthDate}
            />
        </View>
    ));