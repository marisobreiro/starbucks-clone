import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native"
import MapView, { Marker } from "react-native-maps"

export default function Stores() {
    return (
        <View style={styles.container}>
            <MapView 
                initialRegion={{
                    latitude: -25.435005,
                    longitude: -49.2817455,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                style={styles.map}>
                {/* <Marker
                    coordinate= {-25.435005 -49.2817455}
                /> */}
            </MapView>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Lojas próximas</Text>
            </View>
            <ScrollView>
                <View style={styles.store}>
                    <Text style={styles.storeName}>Pátio Batel</Text>
                    <Text style={styles.storeInfo}>Horário sujeito a alteração | Pedidos via celular e retirada</Text>
                    <Text style={styles.storeAddress}>Avenida do Batel, 1868</Text>
                    <Text style={styles.storeAddress}>Aberta</Text>
                    <Text style={styles.storeAddress}>1,6 km</Text>
                </View>
                <View style={styles.store}>
                    <Text style={styles.storeName}>Pátio Batel</Text>
                    <Text style={styles.storeInfo}>Horário sujeito a alteração | Pedidos via celular e retirada</Text>
                    <Text style={styles.storeAddress}>Avenida do Batel, 1868</Text>
                    <Text style={styles.storeAddress}>Aberta</Text>
                    <Text style={styles.storeAddress}>1,6 km</Text>
                </View>
                <View style={styles.store}>
                    <Text style={styles.storeName}>Pátio Batel</Text>
                    <Text style={styles.storeInfo}>Horário sujeito a alteração | Pedidos via celular e retirada</Text>
                    <Text style={styles.storeAddress}>Avenida do Batel, 1868</Text>
                    <Text style={styles.storeAddress}>Aberta</Text>
                    <Text style={styles.storeAddress}>1,6 km</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    map: {
        width: Dimensions.get('window').width,
        height: 300
    },
    titleContainer: {
        borderBottomColor: '#C1C1C1',
        borderBottomWidth: 1
    },
    title: {
        marginVertical: 16,
        fontSize: 16,
        marginHorizontal: 16
    },
    store: {
        borderBottomColor: '#C1C1C1C1',
        borderBottomWidth: 1,
        padding: 16,
    }, 
    storeName: {
        fontWeight: 'bold',
        fontSize: 18
    },
    storeInfo: {
        fontWeight: 'bold',
        marginBottom: 4,
        width: 300
    },
    storeAddress: {
        marginBottom: 4
    }

})