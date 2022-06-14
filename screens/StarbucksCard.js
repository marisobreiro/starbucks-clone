import { Image, StyleSheet, Text, View } from "react-native";
import Iconicons from '@expo/vector-icons/Ionicons';
import Colors from "../constants/Colors";

export default function StarbucksCard() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Meu cartão - 3288</Text>
                <Text style={styles.cardAmount}>R$ 0,00</Text>
                <Text style={styles.text}>atualizado às 13/06/2022 15:42</Text>
            </View>
            <View style={styles.cardContainer}>
                <Image source={require('../assets/images/card.png')}
                    style={styles.card} />
            </View>
            <View style={styles.section}>
                <Text style={styles.textSection}>Mais cartões</Text>
            </View>
            <View style={styles.newCard}>
                <Iconicons 
                    name='add' 
                    size={20} 
                    color='#666' 
                    style={styles.icon} />
            </View>
            <Text style={styles.textAdd}>Adicionar Starbucks Card</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    text: {
        fontSize: 12
    },
    cardAmount: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 2
    },
    cardContainer: {
        top: -220,
        alignSelf: 'center',
        width: '98%',
        height: 300,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.10,
    },
    card: {
        borderRadius: 8,
        resizeMode: 'contain',
        width: '100%',
    },
    section: {
        paddingBottom: 20,
        borderBottomColor: '#C1C1C1C1',
        borderBottomWidth: 1,
    },
    textSection: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    newCard: {
        justifyContent: 'center',
        backgroundColor: '#D1D1D1',
        borderColor: '#666',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 8,
        marginVertical: 20,
        width: 200,
        height: 120
    },
    icon: {
        alignSelf: 'center'
    },
    textAdd: {
        color: Colors.main
    }
})