import { StyleSheet, View } from "react-native";

import Card from "../../UI/Card";
import CardRow from "../../UI/CardRow";

export default function Cards () {
    return (
        <View styles={styles.container}>
            <Card 
                image={require('../../../assets/images/banner-2.png')}
                title='Compre e ganhe 10 estrelas bônus*'
                subtitle='*Faça uma compra a partir de R$30,00 e ganhe 10 estrelas bônus! ✨'
            />
            <Card 
                image={require('../../../assets/images/banner-1.png')}
                title='Experimente as novas bebidas do Outono!'
                subtitle='Avelã choco-caramelo em suas versões Latte, Iced e Frapuccino'
            />
            
            <Card 
                image={require('../../../assets/images/banner-3.png')}
                title='Viva a sua experiência exclusiva!'
                subtitle='Sua bebida em um clique!'
            />
            <Card 
                image={require('../../../assets/images/banner-4.png')}
                title='Queremos te ouvir!'
                subtitle='Responda ao questionário e nos ajude a melhorar a sua experiência no app'
            />
            <CardRow 
                image={require('../../../assets/images/banner-1.png')}
                title='5 lojas próximas'
                subtitle='1,6 km para a mais próxima'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginLeft: 20,
        width: '100%'
    }
})