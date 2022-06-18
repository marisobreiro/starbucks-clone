import { Pressable, StyleSheet, Text } from "react-native"
import Colors from "../../constants/Colors"

export default function MainButton({ btnTitle }) {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>{btnTitle}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: Colors.main,
        borderRadius: 40,
        padding: 10,
        width: 100,
    },
    buttonText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#FFF'
    }
})