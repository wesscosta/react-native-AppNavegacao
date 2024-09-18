import { View, Text, StyleSheet } from "react-native"
import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import 'react-native-gesture-handler'

import HomeScreen from "./components/HomeScreen"
import SettingsScreen from "./components/SettingsScreen"
import CountyScreen from "./components/CountyScreen"


const Drawer = createDrawerNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator  initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Concelho" component={CountyScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
)}
