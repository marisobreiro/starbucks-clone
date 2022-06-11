import { ScrollView, StyleSheet, View } from 'react-native';

import HeaderHome from '../components/Home/Header/HeaderHome';
import ItemShop from '../components/Home/Main/ItemShop';
import StarsInfo from '../components/Home/StarsInfo';


export default function Home() {
    return (
        <View style={styles.screen}>
            <HeaderHome />
            <ScrollView style={styles.scroll}>
                <StarsInfo />
                <ItemShop />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 50,
        // paddingHorizontal: 16
    },
    scroll: {
    }
})