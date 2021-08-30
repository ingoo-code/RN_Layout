import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

//pages
import Home from '../pages/Home';
import Info from '../pages/Info';

export const RootStackNavigationProps = StackNavigationProp;
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer initialRouteName="Info">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: '헬로우월드' }} />
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
