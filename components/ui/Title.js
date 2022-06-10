import { StyleSheet, Text } from "react-native";

export default function Title({ title }) {
    return <Text style={styles.title}>{title}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        paddingHorizontal: 16
    }
})