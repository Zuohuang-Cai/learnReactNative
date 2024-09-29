import {GestureResponderEvent, Image, StyleSheet, Text, TouchableOpacity} from "react-native";

interface CustomButtonProps {
    color: 'primary' | 'secondary' | 'danger'; // Restricting color to specific strings
    onPress: (event: GestureResponderEvent) => void; // Function to handle press events
    title: string; // Button text
}

export const CustomButton: React.FC<CustomButtonProps> = ({color, onPress, title}) => {
    const colors = {
        primary: '#007BFF',
        secondary: '#28A745',
        danger: '#DC3545',
    };
    return (
        <TouchableOpacity
            style={[styles.button, {backgroundColor: colors[color]}]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title} ---{">"}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    arrors: {
        height: 10,
        width: 10,
    },
    button: {
        width: '80%',
        padding: 50,
        borderTopLeftRadius: 20,
        marginTop: 50,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    }
});