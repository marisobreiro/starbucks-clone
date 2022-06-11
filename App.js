import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Home from './screens/Home';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
        {/* <View>
            <Home />
        </View> */}
        <Tab.Navigator>
            <Tab.Screen name="Início" component={ Home } />
            <Tab.Screen name='Cards' component={ Home } />
            <Tab.Screen name='Lojas' component={ Home } />
            <Tab.Screen name='Perfil' component={ Home } />
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
