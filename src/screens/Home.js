import React, { Component } from 'react'
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Dashboard from './Dashboard';
import ContactUs from './ContactUs';
import Profile from './Profile';
import Explore from './Explore';

const Home = createMaterialBottomTabNavigator({
  Explore: { 
    screen: Explore,
    navigationOptions:{
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => (<Icon name="find" color={tintColor} size={24} />),
    } 
  },  
  Dashboard: { 
      screen: Dashboard,
      navigationOptions:{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ tintColor }) => (<Icon name="dashboard" color={tintColor} size={24} />),
      } 
    },
    Profile: { 
      screen: Profile,
      navigationOptions:{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (<Ionicons name="md-person" color={tintColor} size={24} />),
      }  
    },
    ContactUs: { 
      screen: ContactUs,
      navigationOptions:{
        tabBarLabel: 'Contact Us',
        tabBarIcon: ({ tintColor }) => (<Ionicons name="ios-chatboxes" color={tintColor} size={24} />),
      }  
    },
    
  }, {
    initialRouteName: 'Profile',
    activeColor: '#f0edf6',
    inactiveColor: '#f0edf6',
    barStyle: { 
      backgroundColor: '#694fad',
      height: hp(8), 
      // padding: 5,
    },
    shifting: false,
  });

  export default Home;