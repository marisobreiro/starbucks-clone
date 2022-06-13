import  {StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'

import Colors from '../../../constants/Colors';
import DefaultButton from '../../UI/DefaultButton';

export default function StarsInfo() {
    return (
        <View style={styles.container}>
            <View style={styles.starsTotal}>
                <Text style={styles.starsTitle}>216</Text>
                <FontAwesome name='star' size={25} color={Colors.stars}/>
            </View>
            <Text style={styles.starsSubtitle}>Saldo de estrelas</Text>
            <View style={styles.starsProgress}>
                <View style={styles.starsBar}></View>
                <View style={styles.starContainer}>
                    <View style={styles.starCircle}></View>
                    <Text>15</Text>
                </View>
                <View style={styles.starsBar}></View>
                <View style={styles.starsBar}></View>
                <View style={styles.starContainer}>
                    <View style={styles.starCircle}></View>
                    <Text>30</Text>
                </View>
                <View style={styles.starsBar}></View>
                <View style={styles.starsBar}></View>
                <View style={styles.starContainer}>
                    <View style={styles.starCircle}></View>
                    <Text>45</Text>
                </View>
                <View style={styles.starsBar}></View>
                <View style={styles.starsBar}></View>
                <View style={styles.starContainer}>
                    <View style={styles.starCircle}></View>
                    <Text>70</Text>
                </View>
                <View style={styles.starsBar}></View>
                <View style={styles.starsBar}></View>
                <View style={styles.starContainer}>
                    <View style={styles.starCircle}></View>
                    <Text>150</Text>
                </View>
                <View style={styles.starsBar}></View>
                <View style={styles.starsBarDis}></View>
                <View style={styles.starContainer}>
                    <View style={styles.starsCircleDis}></View>
                    <Text>300</Text>
                </View>
                <View style={styles.starsBarDis}></View>
            </View>
            <DefaultButton btnTitle="Detalhes" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 16,
        backgroundColor: '#F7F7F7',
        height: 'auto',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    starsTotal: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    starsTitle: {
        color: Colors.secondary,
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: 8,
    },
    starsSubtitle: {
        color: "#999999",
        marginTop: 3
    },
    starsProgress: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 45,
        width: '100%'
    },
    starsBar: {
        borderTopColor: Colors.stars,
        borderTopWidth: 3,
        width: 20
    },
    starCircle: {
        backgroundColor: Colors.stars,
        borderRadius: 40,
        width: 15,
        height: 15,
        marginBottom: 8
    },
    starsBarDis: {
        borderTopColor: '#AAAAAA',
        borderTopWidth: 3,
        width: 20
    },
    starsCircleDis: {
        borderColor: '#AAAAAA',
        borderWidth: 3,
        borderRadius: 40,
        width: 15,
        height: 15,
        marginBottom: 8
    },
    starContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 18
    }
})