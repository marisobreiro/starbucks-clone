import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TopMenu() {
    return (
        <View style={styles.menu}>
            <View style={styles.menuItem}>
                <Ionicons name='mail-outline' size={20} />
                <Text style={styles.menuText}>Mensagens</Text>
            </View>
            <View style={styles.menuItem}>
                <Ionicons name='calendar-outline' size={20} />
                <Text style={styles.menuText}>Histórico</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        elevation: 10,
        flexDirection: 'row',
        width: 600,
        height: 50,
        paddingHorizontal: 16,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.10,
        backgroundColor: '#FFFFFF',
    },
    menuItem: {
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 8
    },
    menuText: {
        fontSize: 14,
        marginHorizontal: 8
    }
})