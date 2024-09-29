import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Alert, Button} from "react-native";

function ChangeWord(worden: any, setWord: any, setScore: any, penalty: number = 0) {
    let randomWord = worden[0][Math.floor(Math.random() * worden[0].length)];
    setScore((score: number) => score - penalty);
    setWord(randomWord);
}

function GameArena({worden, time, navigation}: any) {
    let [inputWord, setInputWord] = useState("");
    let [word, setWord] = useState<any>();
    let [score, setScore] = useState(0);
    let changeInputWord = (text: React.SetStateAction<string>) => {
        setInputWord(text);
        if (word.chinese.includes(text)) {
            setScore(score + 1);
            setInputWord("");
            ChangeWord(worden, setWord, setScore);
        }
    };
    useEffect(() => {
        ChangeWord(worden, setWord, setScore);
    }, []);

    useEffect(() => {
        if (time === 0) {
            Alert.alert("Game Over! Your score is " + score);
            navigation.navigate("Home");
        }
    }, [time]);

    return (
        <View>
            <Text style={{textAlign: "center", fontSize: 20}}>Score: {score}</Text>
            {word && <Text style={{textAlign: "center", fontSize: 20}}>{word.english}</Text>}
            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, minWidth: 200}}
                       value={inputWord} onChangeText={changeInputWord}/>
            <Button title="跳过" onPress={() => ChangeWord(worden, setWord, setScore, 1)}/>
        </View>
    );
}

export default React.memo(GameArena);
