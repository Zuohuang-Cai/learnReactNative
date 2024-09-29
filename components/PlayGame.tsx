import {Text, View} from "react-native";
import {useEffect, useState} from "react";
import GameArena from "./GameArena.tsx";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function PlayGame({route, navigation}: any) {
    let [waiting, setWaiting] = useState(3);
    let [showTimer, setShowTimer] = useState(true);
    let [Timer, setTimer] = useState(63);
    let [worden, setworden] = useState<any>([]);
    useEffect(() => {
        let {mode} = route.params;
        if (mode === "300s") {
            setTimer(303);
        }

        async function generateBasicData() {
            let storedWord: any = await AsyncStorage.getItem('@Words');
            let Mworden = [];
            storedWord = JSON.parse(storedWord);
            for (const storedWordElement in storedWord) {
                Mworden.push(storedWord[storedWordElement]);
            }
            setworden(Mworden);
        }

        generateBasicData();
        const intervalId = setInterval(() => {
            setWaiting(prevSeconds => {
                if (prevSeconds <= 1) {
                    setShowTimer(false);
                    return 0;
                }
                return prevSeconds - 1;
            });
            setTimer(prevSeconds => {
                if (prevSeconds <= 1) {
                    clearInterval(intervalId);
                    return 0;
                }
                return prevSeconds - 1;
            });

        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    if (showTimer) {
        return <Text>The game will start in {waiting} seconds!</Text>
    }
    return (
        <View>
            <View>
                <Text style={{textAlign: "center", fontSize: 30, color: "red"}}>Lets Play!</Text>
                <Text style={{textAlign: "center", fontSize: 30, color: "red"}}>{Timer}</Text>
                <GameArena
                    worden={worden}
                    time={Timer}
                    navigation={navigation}
                />
            </View>
        </View>
    );
}
