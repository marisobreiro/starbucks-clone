import  { StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Colors from '../../constants/Colors';

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
                <View style={styles.starCircle}></View>
                <View style={styles.starsBar}></View>
                <View style={styles.starsBar}></View>
                <View style={styles.starCircle}></View>
                <View style={styles.starsBar}></View>
                <View style={styles.starsBar}></View>
                <View style={styles.starCircle}></View>
                <View style={styles.starsBar}></View>
                <View style={styles.starsBar}></View>
                <View style={styles.starCircle}></View>
                <View style={styles.starsBar}></View>
                <View style={styles.starsBar}></View>
                <View style={styles.starCircle}></View>
                <View style={styles.starsBar}></View>
                <View style={styles.starsBarDis}></View>
                <View style={styles.starsCircleDis}></View>
                <View style={styles.starsBarDis}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 16,
        // backgroundColor: '#F1F1F1F1',
        height: 300
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
        marginVertical: 40
    },
    starsBar: {
        borderTopColor: Colors.stars,
        borderTopWidth: 3,
        width: 20
    },
    starCircle: {
        backgroundColor: Colors.stars,
        borderRadius: 40,
        width: 20,
        height: 20
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
        width: 20,
        height: 20
    }
})