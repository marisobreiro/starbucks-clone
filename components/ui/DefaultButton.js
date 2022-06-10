import { Pressable, StyleSheet, Text } from "react-native"
import Colors from "../../constants/Colors"

export default function DefaultButton({ btnTitle }) {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>{btnTitle}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderColor: Colors.secondary,
        borderWidth: 1,
        borderRadius: 40,
        padding: 8,
        width: 100,
    },
    buttonText: {
        fontSize: 13,
        color: Colors.secondary
    }
})