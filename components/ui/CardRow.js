import { Image, StyleSheet, Text, View } from 'react-native';
import MainButton from './MainButton';

export default function CardRow ({ image, title, subtitle }) {
    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                        Teste 
                </Text>
                <Text>
                    {subtitle}
                </Text>
                <View style={styles.btn}>
                    <MainButton btnTitle='Saiba mais' />
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image source={image} 
                    style={styles.image}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        borderRadius: 8,
        height: 250,
        width: '95%',
        marginVertical: 8,
        elevation: 1,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.10
    },
    imageContainer: {
        width: '50%',
        height: '100%'
    },
    image: {
        borderRadius: 8,
        width: '95%',
        height: '100%'
    },
    textContainer: {
        margin: 16,
        width: '45%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 20
    },
    btn: { 
        marginTop: 20
    }

})