import { Image, StyleSheet, View, Text } from 'react-native';
import MainButton from '../components/UI/MainButton';

export default function Ordering() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/images/draw.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.textContainer}>
                <MainButton btnTitle='Retirar na loja' style={styles.btn}/>
                <Text style={styles.text}>Faça o seu pedido aqui no app e retire em uma de nossas lojas!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    imageContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '50%',
        height: 300
    },
    image: {
        resizeMode: 'contain',
        width: '100%'
    },
    textContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '50%'
    },
    btn: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    text: { 
        flexWrap: 'wrap',
        alignSelf: 'center',
        marginTop: 20
    }
})