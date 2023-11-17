import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Firebase
import { authentication, database } from './config/firebase';
//pages
import Navigation from './screeens/authenticated/Navigation';
import Login from './screeens/unauthenticated/Login';


const Stack = createStackNavigator()

export default function App() {
  
    // Initialize Firebase with your config
  const [user, setUser] = useState(null);

  // Listen   for auth state changes
  try{
    useEffect(() => {
      const unsubscribe = authentication.onAuthStateChanged((authenticatedUser) => {
        setUser(authenticatedUser);
      });
  
      // Unsubscribe when component unmounts
      return () => unsubscribe();
    }, []);
  }catch(e){
    console.log(e);
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {
          !user?
          <Login/>
          :
          <Navigation/>
        }
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
