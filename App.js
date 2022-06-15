import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Iconicons from '@expo/vector-icons/Ionicons';

import Home from './screens/Home';
import Colors from './constants/Colors';
import StarbucksCard from './screens/StarbucksCard';
import Ordering from './screens/Order';
import Stores from './screens/Stores';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    let cor;

                    if (route.name == 'Home') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                        cor = focused ? Colors.main : '#AAAAAA';
                    } 
                    if (route.name == 'Cards') {
                        iconName = focused ? 'ios-card' : 'ios-card-outline';
                        cor = focused ? Colors.main : '#AAAAAA';
                    }
                    if (route.name == 'Order') {
                        iconName = focused ? 'cafe' : 'cafe-outline';
                        cor = focused ? Colors.main : '#AAAAAA';
                    }
                    if (route.name == 'Stores') {
                        iconName = focused ? 'ios-business' : 'ios-business-outline';
                        cor = focused ? Colors.main : '#AAAAAA';
                    }
                    if (route.name == 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                        cor = focused ? Colors.main : '#AAAAAA';
                    }

                    return <Iconicons name={iconName} size={20} color={cor} />
                }
            })}>
            <Tab.Screen name='Home' component={ Home } options={{headerShown: false, activeTintColor: Colors.main, inactiveTintColor: '#AAA'}} />
            <Tab.Screen name='Cards' component={ StarbucksCard } />
            <Tab.Screen name='Order' component={ Ordering } />
            <Tab.Screen name='Stores' component={ Stores } />
            <Tab.Screen name='Profile' component={Home} />
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
