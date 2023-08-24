import React from 'react';
import { createDrawNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "../screens/Home";
import BottomTabNavigator from './TabNavigator';
const Drawer = createDrawNavigator()
const DrawerNavigator = ()=>{
    return(
    <Drawer.Navigator>
        <Drawer.Screen name = "home" component = {home}/>
        <Drawer.Screen name = "tabs" component = {TabNavigator}/>
        </Drawer.Navigator>
    )
    
} 
export default DrawerNavigator





