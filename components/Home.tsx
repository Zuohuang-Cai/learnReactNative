// components/anotherPage.js

import React from 'react';
import container from '../css/container.ts';
import {CustomButton} from './customButton';
import LinearGradient from 'react-native-linear-gradient';

export function Home({navigation}: any) {
    return (
        <LinearGradient
            colors={['rgb(255, 174, 71)', 'rgb(238, 130, 238)']} // 渐变色数组
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={container.container}
        >
            <CustomButton color="primary" onPress={() => navigation.navigate('StoreWords')} title="Store Words"/>
            <CustomButton color="danger" onPress={() => navigation.navigate('SeeCategory')} title="See WordsCategory"/>
            <CustomButton color="secondary" onPress={() => navigation.navigate('Memorize')} title="Memorize"/>
        </LinearGradient>
    );
}
