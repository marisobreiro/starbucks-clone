import { Image, StyleSheet, Text, View } from 'react-native';
import MainButton from './MainButton';

export default function Card ({ image, title, subtitle }) {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={image} 
                    style={styles.image}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {title} 
                </Text>
                <Text>
                    {subtitle}
                </Text>
                <View style={styles.btn}>
                    <MainButton btnTitle='Saiba mais' />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        alignSelf: 'center',
        backgroundColor: '#FFF',
        borderRadius: 8,
        height: 450,
        width: '95%',
        marginVertical: 8,
        elevation: 1,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.10
    },
    imageContainer: {
        width: '100%',
        height: '70%'
    },
    image: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        width: '100%',
        height: '90%'
    },
    textContainer: {
        marginHorizontal: 16   
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8
    },
    btn: { 
        bottom: -10
    }

})