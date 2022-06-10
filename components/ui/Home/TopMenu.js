import { Text, View } from 'react-native';

export default function TopMenu() {
    return (
        <View style={styles.menuContainer}>
            <Text style={styles.menuText}>Mensagens</Text>
            <Text style={styles.menuText}>Histórico</Text>
        </View>
    )
}