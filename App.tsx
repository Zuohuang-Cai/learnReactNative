import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './components/Home.tsx';
import {StoreWords} from './components/storeWords.tsx';
import {SeeCategory} from "./components/SeeCategory.tsx";
import {SeeWords} from "./components/SeeWords.tsx";
import {Memorize} from "./components/memorize.tsx";
import {PlayGame} from "./components/PlayGame.tsx";
import {enableScreens} from 'react-native-screens';

function App(): React.JSX.Element {
    enableScreens();
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="StoreWords" component={StoreWords}/>
                <Stack.Screen name="SeeCategory" component={SeeCategory}/>
                <Stack.Screen name="SeeWords" component={SeeWords}/>
                <Stack.Screen name="Memorize" component={Memorize}/>
                <Stack.Screen name="PlayGame" component={PlayGame}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;