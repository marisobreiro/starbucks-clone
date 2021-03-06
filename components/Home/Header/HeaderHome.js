import { StyleSheet, View } from 'react-native';

import Title from '../../UI/Title';
import TopMenu from './TopMenu';

export default function HeaderHome() {
    return (
        <View style={styles.header}>
            <View style={styles.title}>
                <Title title="Bom dia, Mariana! ☕️" />
            </View>
            <TopMenu />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        elevation: 1,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.10,
        backgroundColor: '#FFFFFF',
        zIndex: 1,
        paddingTop: 100
    },
    title: {
        marginBottom: 50
    }
})