import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';

export default function Home() {
    return (
        <View style={styles.screen}>
            <Title title="Bom dia, Felipe! ☕️" />
            <View style={styles.menuContainer}>
                <Text style={styles.menuText}>Mensagens</Text>
                <Text style={styles.menuText}>Histórico</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 50,
        paddingHorizontal: 16
    },
    menuContainer: {
        flexDirection: 'row',
        marginTop: 50
    },
    menuText: {
        marginRight: 8
    }
})