import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'mobx-react';
import stores from "./src/stores";
import S from './src/screens';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider {...stores}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={S.HomeScreen} />
          <Stack.Screen name="Details" component={S.DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
