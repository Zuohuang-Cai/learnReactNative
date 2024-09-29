import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RenderWords from './renderWords.tsx';
import {View, Text, ActivityIndicator} from 'react-native';  // 导入加载指示器

export function SeeCategory({navigation}: any) {

    const [words, setWords] = useState<any>();
    const [loading, setLoading] = useState(true);  // 加载状态

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const storedWords = await AsyncStorage.getItem('@Words');
                if (storedWords !== null) {
                    setWords(JSON.parse(storedWords));
                }
            } catch (e) {
                console.error('Failed to fetch the data:', e);
            } finally {
                setLoading(false);
            }
        };
        fetchWords();
    }, []);

    if (loading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#0000ff"/>
                <Text>Loading...</Text>
            </View>
        );
    }
    return (
        <RenderWords words={words}
                     navigation={navigation}
        />
    );

}
