import React from 'react';
import container from "../css/container.ts";
import {CustomButton} from "./customButton.tsx";
import LinearGradient from "react-native-linear-gradient";

interface Translation {
    english: string;
    chinese: string[];
}

interface WordsObject {
    [key: string]: Translation[];
}

interface RenderWordsProps {
    words: WordsObject;
    navigation: any;

}

const RenderWords: React.FC<RenderWordsProps> = ({words, navigation}) => {
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
            {Object.keys(words).map((category) => (
                // @ts-ignore
                <CustomButton color={getRandomColor()}
                              onPress={() => navigation.navigate('SeeWords', {words: words[category]})}
                              title={category}
                              key={category}/>
            ))}
        </LinearGradient>
    );
};

export default RenderWords;
