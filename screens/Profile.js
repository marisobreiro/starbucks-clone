import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../constants/Colors';
import DefaultButton from '../components/UI/DefaultButton';

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Ionicons name='person-circle' size={30} color={Colors.app} />
                <Text style={styles.itemText}>Info Pessoal</Text>
            </View>
            <View style={styles.item}>
                <Ionicons name='card' size={30} color={Colors.app} />
                <Text style={styles.itemText}>Formas de Pagamento</Text>
            </View>
            <View style={styles.item}>
                <Ionicons name='pin' size={30} color={Colors.app} />
                <Text style={styles.itemText}>Endereços</Text>
            </View>
            <View style={styles.item}>
                <Ionicons name='lock-closed' size={30} color={Colors.app} />
                <Text style={styles.itemText}>Alterar senha</Text>
            </View>
            <View style={styles.item}>
                <Ionicons name='help-circle' size={30} color={Colors.app} />
                <Text style={styles.itemText}>Ajuda</Text>
            </View>
            <View style={styles.item}>
                <Ionicons name='globe-outline' size={30} color={Colors.app} />
                <Text style={styles.itemText}>Acesse startbucks.com.br</Text>
            </View>
            <View style={styles.item}>
                <Ionicons name='document-text' size={30} color={Colors.app} />
                <Text style={styles.itemText}>Termos e Condições</Text>
            </View>
            <View style={styles.item}>
                <Ionicons name='document-text' size={30} color={Colors.app} />
                <Text style={styles.itemText}>Política de privacidade</Text>
            </View>
            <View style={styles.item}>
                <Ionicons name='information-circle' size={30} color={Colors.app} />
                <Text style={styles.itemText}>Sobre o aplicativo</Text>
            </View>
            <View style={styles.btn}>
                <DefaultButton btnTitle='Sair' />
                <View style={styles.social}>
                    <Ionicons name='logo-instagram' size={30} color={Colors.app} style={styles.socialIcon} />
                    <Ionicons name='logo-facebook' size={30} color={Colors.app} style={styles.socialIcon} />
                    <Ionicons name='logo-twitter' size={30} color={Colors.app} style={styles.socialIcon} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#C1C1C1',
        borderBottomWidth: 1,
        borderTopColor: '#C1C1C1',
        borderTopWidth: 1,
        flex: 1
    },
    item: {
        alignItems: 'center',
        borderBottomColor: '#C1C1C1',
        borderBottomWidth: 1,
        flexDirection: 'row',
        padding: 16
    },
    itemText: {
        fontSize: 16,
        marginLeft: 8
    },
    btn: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginVertical: 28
    },
    social: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    socialIcon: {
        marginRight: 16
    }

})