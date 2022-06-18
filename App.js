import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Iconicons from '@expo/vector-icons/Ionicons';

import Home from './screens/Home';
import Colors from './constants/Colors';
import StarbucksCard from './screens/StarbucksCard';
import Ordering from './screens/Order';
import Stores from './screens/Stores';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    let cor;

                    if (route.name == 'Início') {
                        iconName = 'star'
                        cor = focused ? Colors.main : '#AAAAAA';
                    } 
                    if (route.name == 'Cards') {
                        iconName = focused ? 'ios-card' : 'ios-card-outline';
                        cor = focused ? Colors.main : '#AAAAAA';
                    }
                    if (route.name == 'Pedido') {
                        iconName = focused ? 'cafe' : 'cafe-outline';
                        cor = focused ? Colors.main : '#AAAAAA';
                    }
                    if (route.name == 'Lojas') {
                        iconName = focused ? 'ios-business' : 'ios-business-outline';
                        cor = focused ? Colors.main : '#AAAAAA';
                    }
                    if (route.name == 'Perfil') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                        cor = focused ? Colors.main : '#AAAAAA';
                    }

                    return <Iconicons name={iconName} size={30} color={cor} />
                }
            })}>
            <Tab.Screen name='Início' component={ Home } options={{headerShown: false, activeTintColor: Colors.main, inactiveTintColor: '#AAA'}} />
            <Tab.Screen name='Cards' component={ StarbucksCard } />
            <Tab.Screen name='Pedido' component={ Ordering } />
            <Tab.Screen name='Lojas' component={ Stores } />
            <Tab.Screen name='Perfil' component={ Profile } />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
