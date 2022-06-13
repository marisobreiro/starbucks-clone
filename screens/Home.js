import { StyleSheet, ScrollView, View } from 'react-native';

import HeaderHome from '../components/Home/Header/HeaderHome';
import Cards from '../components/Home/Main/Cards';
import ItemShop from '../components/Home/Main/ItemShop';
import StarsInfo from '../components/Home/Main/StarsInfo';

export default function Home() {
    return (
        <View style={styles.container}>
            <HeaderHome />
            <ScrollView >
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
    }
})