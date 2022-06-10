import { StyleSheet, Text, View } from 'react-native';
import StarsInfo from '../components/Home/StarsInfo';
import TopMenu from '../components/Home/TopMenu';
import Title from '../components/UI/Title';

export default function Home() {
    return (
        <View style={styles.screen}>
            <View style={styles.title}>
                <Title title="Bom dia, Felipe! ☕️" />
            </View>
            <TopMenu />
            <StarsInfo />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 50,
        // paddingHorizontal: 16
    },
    title: {
        marginBottom: 50
    }
})