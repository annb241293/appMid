import React, { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Notification from "./screens/Notification";
import Account from "./screens/Account";

const Stack = createStackNavigator();

export default function App() {


  useEffect(() => {

  }, []);

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false }}>
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

