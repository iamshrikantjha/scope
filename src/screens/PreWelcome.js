import React, { Component } from 'react'
import { View, Text, Image, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, Vibration, TouchableWithoutFeedback, Alert } from 'react-native';
import { ActivityIndicator, Colors, Headline, Button } from 'react-native-paper';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MaterialTopTabBar } from 'react-navigation';
import navigation from '../navigation';
// import console = require('console');

class PreWelcome extends Component {
    constructor(props){
        super()
        {
            
        }
        onNav = (props) => {
            this.props.navigation.navigate('Welcome')
        }
    }
    render() {
        // const DURATION = 100;
        // const PATTERN = [1000, 2000, 3000];
        return (
            <View style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}>
                <Text style={{
                    fontFamily: "circular-black",
                    fontSize: hp(6),
                    // backgroundColor: "pink",
                    // marginTop: hp(7),
                    color: "#694fad",
                }}>
                    Scope
                </Text>
                <Image source={require('./../../assets/icon2.png')} 
                    style={{
                        height: hp(30),
                        width: hp(30),
                    }}/>
                <TouchableOpacity
                    style={{
                        width: hp(9),
                        height: hp(9),
                        borderRadius: 100,
                        // overflow: "hidden",
                    }}
                    // underlayColor={"pink"}
                    onPress={()=> {Vibration.vibrate(); onNav()}}
                    >
                    <View style={{
                        width: hp(9),
                        height: hp(9),
                        backgroundColor: "#694fad",
                        borderRadius: 100,
                        elevation: 7,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Ionicons name="md-arrow-round-forward" size={55} color="white" />
                    </View>
                </TouchableOpacity>
                
            </View>
        )
    }
}

export default PreWelcome;