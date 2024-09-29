// components/detailsPage.js

import React, {useState} from 'react';
import {View, Text, Button, TextInput, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {basicW} from "../assets/basicW.ts";
import Clipboard from '@react-native-clipboard/clipboard';

export function StoreWords() {

    const [inputEnglish, setInputEnglish] = useState('');
    const [inputChinese, setInputChinese] = useState('');

    generateBasicData();
    const copyToClipboard = async () => {
        Clipboard.setString(await AsyncStorage.getItem('@Words') as string);
        Alert.alert('复制成功！');
    };
    const handleChangeEnglish = (text: React.SetStateAction<string>) => {
        setInputEnglish(text);
    };
    const handelChangeChinese = (text: React.SetStateAction<string>) => {
        setInputChinese(text);
    };

    const handleSubmit = async () => {
        let storedWord: any = await AsyncStorage.getItem('@Words');
        if (storedWord != null) {
            storedWord = JSON.parse(storedWord);
            storedWord.custom.push({"english": inputEnglish, "chinese": inputChinese.split(/[，,]+/)});
            await AsyncStorage.setItem('@Words', JSON.stringify(storedWord));
            Alert.alert('Success', '单词添加成功！');
        }
        setInputEnglish('');
        setInputChinese('');
    };
    return (

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>添加单词，注意如果中文有多义词那么可以通过，来添加多个意思。 如czh，真帅</Text>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, minWidth: 200}}
                onChangeText={handleChangeEnglish}
                value={inputEnglish}
                placeholder={"英文"}
            />
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, minWidth: 200}}
                onChangeText={handelChangeChinese}
                value={inputChinese}
                placeholder={"中文"}
            />
            <View style={{
                display: 'flex',
                justifyContent: 'space-around',
                height: "10%",
                minWidth: 200,
            }}>
                <Button title="添加" onPress={handleSubmit}/>
                <Button title="导出" onPress={copyToClipboard}/>
            </View>
        </View>
    )
        ;
}

async function generateBasicData() {
    if (await AsyncStorage.getItem('@Words') == null) {
        try {
            await AsyncStorage.setItem('@Words', JSON.stringify(basicW));
            console.log('Data saved successfully');
        } catch (e) {
            console.error('Failed to save data:', e);
        }
    }
}
