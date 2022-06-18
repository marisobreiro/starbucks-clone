import { StyleSheet, ScrollView, View } from 'react-native';

import HeaderHome from '../components/Home/Header/HeaderHome';
import Cards from '../components/Home/Main/Cards';
import ItemShop from '../components/Home/Main/ItemShop';
import StarsInfo from '../components/Home/Main/StarsInfo';
import MainButton from '../components/UI/MainButton';

export default function Home() {
    return (
        <View style={styles.container}>
            <HeaderHome />
            <ScrollView style={styles.scroll}>
                <StarsInfo />
                <ItemShop />
                <Cards />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scroll: {
        // zIndex: -1
    },
    btnContainer: {
        backgroundColor: 'transparent',
        zIndex: -1
    }
})