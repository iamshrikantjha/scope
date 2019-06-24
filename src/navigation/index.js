import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz/Quiz';
import StartQuiz from '../screens/Quiz/StartQuiz';
import QuizList from '../screens/Quiz/QuizList';
import Result from '../screens/Quiz/Result';
import PreWelcome from '../screens/PreWelcome';
import ContactUs from '../screens/ContactUs'

const AppNavigator = createStackNavigator({
    PreWelcome: {
        screen: PreWelcome, 
    },
    Welcome: {
        screen: Welcome, 
    },
    Register: {
         screen: Register, 
    }, 
    Login: {
    screen: Login, 
    },

    QuizList: {
        screen: QuizList, 
        },
    ContactUs: {
        screen: ContactUs, 
        },    
    StartQuiz: {
        screen: StartQuiz, 
        },
    Quiz: {
        screen: Quiz, 
        },
    Result: {
        screen: Result, 
        },    
    Home: {
        screen: Home, 
        },

    },
    {
        headerMode: 'none',
});
  
export default createAppContainer(AppNavigator);
