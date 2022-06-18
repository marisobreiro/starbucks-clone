import { Image, ScrollView, StyleSheet, View, Text } from 'react-native';
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
                        <FontAwesome name="plus" size={12} color="#FFF"/>
                    </View>
                    <View style={styles.itemContainer}>
                        <Image 
                            source={require('../../../assets/images/minipao.png')}
                            style={styles.image} />
                    </View>
                    <Text style={styles.label}> Mini Pão de Queijo</Text>
                </View>

                <View style={ styles.item}>
                    <View style={styles.icon}>
                        <FontAwesome name="plus" size={12} color="#FFF"/>
                    </View>
                    <View style={styles.itemContainer}>
                        <Image 
                            source={require('../../../assets/images/paoqueijo.png')} 
                            style={styles.image} />
                    </View>
                    <Text style={styles.label}>Pão de Queijo</Text>
                </View>

                <View style={styles.item}>
                    <View>
                        <View style={styles.icon}>
                            <FontAwesome name="plus" size={12} color="#FFF"/>
                        </View>
                        <View style={styles.itemContainer}>
                        <Image 
                                source={require('../../../assets/images/frapbrigadeiro.png')} 
                                style={styles.image} />
                        </View>
                    </View>
                    <Text style={styles.label}>Frapuccino Brigadeiro</Text>
                </View>

                <View style={ styles.item}>
                    <View style={styles.icon}>
                        <FontAwesome name="plus" size={12} color="#FFF"/>
                    </View>
                    <View style={styles.itemContainer}>
                        <Image 
                            source={require('../../../assets/images/cookie.png')} 
                            style={styles.imageReduce} />
                    </View>
                    <Text style={styles.label}>Cookie de Baunilia</Text>
                </View>

                <View style={ styles.item}>
                    <View style={styles.icon}>
                        <FontAwesome name="plus" size={12} color="#FFF"/>
                    </View>
                    <View style={styles.itemContainer}>
                        <Image 
                            source={require('../../../assets/images/croque.png')} 
                            style={styles.imageReduce} />
                    </View>
                    <Text style={styles.label}>Croque Monsieur</Text>
                </View>

                <View style={ styles.item}>
                    <View style={styles.icon}>
                        <FontAwesome name="plus" size={12} color="#FFF"/>
                    </View>
                    <View style={styles.itemContainer}>
                        <Image 
                            source={require('../../../assets/images/caramelomachiato.png')} 
                            style={styles.image} />
                    </View>
                    <Text style={styles.label}>Caramelo Macchiato Gelado</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        backgroundColor: '#FFF',
        elevation: 1,
        marginBottom: 20,
        paddingBottom: 8,
        paddingHorizontal: 16,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.10,
        zIndex: 1
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
        backgroundColor: Colors.app,
        borderRadius: 50,
        height: 20,
        padding: 5,
        right: -70,
        top: 30,
        width: 20,
    },
    item: {
        margin: 10,
        width: 100
    },
    label: {
        textAlign: 'center',
        fontSize: 12,
        left: -8
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    imageReduce: {
        width: '80%',
        height: '100%',
        resizeMode: 'contain',
        alignSelf: 'center'
    }
})