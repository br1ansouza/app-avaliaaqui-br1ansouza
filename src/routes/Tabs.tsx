import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import ListProduct from '../pages/ListProduct'; 
import Avaliation from '../pages/Avaliation';
import { propsNavigationTab } from './models/types';

const Tab = createBottomTabNavigator<propsNavigationTab>();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: '#e7e4d5', 
        tabBarStyle: {
          backgroundColor: '#703e3b', 
          borderTopWidth: 0,
          minHeight: 60,
        },
        tabBarItemStyle: {
          paddingBottom: 10,
          paddingTop: 5,
        },
      })}
    >
      <Tab.Screen
        name="Veiculos"
        component={ListProduct}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={'car-outline'} size={size} color={color} /> 
          ),
        }}
      />
      <Tab.Screen
        name="Avaliacao"
        component={Avaliation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={'clipboard-outline'} size={size} color={color} /> 
          ),
        }}
      />
    </Tab.Navigator>
  );
}