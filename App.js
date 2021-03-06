import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { StyleSheet, Text, View } from 'react-native';
import MealsNavigatior from './navigation/MealsNavigator'
import { enableScreens } from 'react-native-screens'

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  
  if(!fontLoaded){
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setFontLoaded(true)} 
        onError={(e)=> console.log(e)}
      />
    )
  }
  return <MealsNavigatior />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


