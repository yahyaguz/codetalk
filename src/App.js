import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View,StatusBar } from 'react-native';
import Login from './screens/authScreens/login';
import Sign from './screens/authScreens/signup';
import FlashMessage from 'react-native-flash-message';

const Stack = createStackNavigator();

function App() {
    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="LoginScreen" component={Login} />
                <Stack.Screen name="SignScreen" component={Sign} />
            </Stack.Navigator>
        );
    };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AuthStack" component={AuthStack} />
            </Stack.Navigator>
            <FlashMessage position="top" />
        </NavigationContainer>
    );
}

export default App;