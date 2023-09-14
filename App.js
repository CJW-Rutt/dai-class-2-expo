import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva'; //needed for kitten
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components'; //needed for kitten

import Home from './screens/Home';
import About from './screens/About';

export default function App() {
  const Stack = createNativeStackNavigator();
  
//application provider needed for kitten

  return (
    <ApplicationProvider {...eva} theme={eva.light}> 
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
              name="Home"
              component={Home}
              options={{
                title: 'Welcome!',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen name="About" component={About}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ApplicationProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
