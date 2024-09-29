import LinearGradient from "react-native-linear-gradient";
import container from "../css/container.ts";
import {CustomButton} from "./customButton.tsx";
import React from "react";

export function Memorize({navigation}: any) {

    const getRandomColor: () => string = () => {
        let colors = ["primary", "secondary", "danger"];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <LinearGradient
            colors={['rgb(255, 174, 71)', 'rgb(238, 130, 238)']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={container.container}
        >
            <CustomButton color={getRandomColor()}
                          onPress={() => navigation.navigate('PlayGame', {mode: "60s"})}
                          title="60s"
            />

            <CustomButton color={getRandomColor()}
                          onPress={() => navigation.navigate('PlayGame', {mode: "300s"})}
                          title="300s"
            />
        </LinearGradient>
    );
}
