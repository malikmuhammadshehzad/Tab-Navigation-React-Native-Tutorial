import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Search from './Screens/Search';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PlusButton from './Screens/PlusButton';
import Photo from './Screens/Photo';
import User from './Screens/User';
const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Fontisto name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="plus"
          component={PlusButton}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="plus-square" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name=" photo"
          component={Photo}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="photo" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="user"
          component={User}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="user-secret" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
