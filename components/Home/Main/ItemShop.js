import { ScrollView, StyleSheet, View, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Colors from '../../../constants/Colors';

export default function ItemShop() {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>Talvez você goste desses produtos</Text>
            <Text style={styles.subTitle}>Retire na loja o produto selecionado</Text>
            <ScrollView style={styles.listItem} horizontal={true}>
                <View style={ styles.item}>
                    <View style={styles.icon}>
                        <FontAwesome name="plus" size={10} color="#FFF"/>
                    </View>
                    <View style={styles.itemContainer}></View>
                </View>
                <View style={ styles.item}>
                    <View style={styles.icon}>
                        <FontAwesome name="plus" size={10} color="#FFF"/>
                    </View>
                    <View style={styles.itemContainer}></View>
                </View>
                <View style={ styles.item}>
                    <View style={styles.icon}>
                        <FontAwesome name="plus" size={10} color="#FFF"/>
                    </View>
                    <View style={styles.itemContainer}></View>
                </View>
                <View style={ styles.item}>
                    <View style={styles.icon}>
                        <FontAwesome name="plus" size={10} color="#FFF"/>
                    </View>
                    <View style={styles.itemContainer}></View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        paddingHorizontal: 16
    },
    title: {
        color: Colors.secondary,
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10
    },
    subTitle: {
        color: '#999999',
        fontSize: 13
    },
    listItem: {
        flexDirection: 'row'
    },
    itemContainer: {
        backgroundColor: '#243735',
        borderRadius: 50,
        width: 85,
        height: 85,
        zIndex: -1
    },
    icon: {
        alignItems: 'center',
        backgroundColor: Colors.main,
        borderRadius: 50,
        height: 20,
        padding: 5,
        right: -70,
        top: 30,
        width: 20,
    },
    item: {
        margin: 10,
    }
})