// components/anotherPage.js

import {ScrollView, StyleSheet, Text, View} from "react-native";

export function SeeWords({route, navigation}: { route: any, navigation: any }) {
    const styles = StyleSheet.create({
        card: {
            backgroundColor: '#fff',
            padding: 15,
            marginVertical: 10,
            marginHorizontal: 20,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 5, // Android shadow
        },
        english: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 5,
        },
        chinese: {
            fontSize: 16,
            color: '#555',
        }
    });
    const {words} = route.params;
    return (
        <ScrollView>
            {words.map((word: any) => (
                <View style={styles.card}>
                    <Text style={styles.english}>{word.english}</Text>
                    {word.chinese.map((chinese: string) => (
                        <Text style={styles.chinese}>{chinese}</Text>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
}
