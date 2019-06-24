import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import { ActivityIndicator, Colors, Headline, Button } from 'react-native-paper';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MaterialTopTabBar } from 'react-navigation';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

class Welcome extends Component {
    constructor(props)
    {
        super(props)
        {
            
        }
        onLogin= (props) =>{
            this.props.navigation.navigate('Login')
        }
        onRegister = (props) =>{
            this.props.navigation.navigate('Register')
        }
    }
    render() {
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
                    marginTop: hp(0),
                    color: "#694fad",
                }}>
                    Scope
                </Text>
                <Image source={require('./../../assets/icon2.png')} 
                    style={{
                        height: hp(30),
                        width: hp(30),
                        marginBottom: hp(6),
                    }}/>
                {/* Buttons */}
                <View style={{
                    width: hp(9),
                    height: hp(9),
                    // backgroundColor: "#694fad",
                    borderRadius: 100,
                    // elevation: 7,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    {/* <Ionicons name="md-arrow-round-forward" size={55} color="white" /> */}
                    {/* button@Login */}
                    <TouchableOpacity
                        onPress={()=>{onLogin()}}>
                        <View style={{
                            width: wp(80),
                            height: hp(8),
                            backgroundColor: "#694fad",
                            borderRadius: 7,
                            alignItems: "center",
                            justifyContent: "center",
                            margin: hp(3),
                        }}>
                            <Text style={{
                                fontFamily: "circular-black",
                                fontSize: 25,
                                color: "white",
                            }}>
                                Login
                            </Text>
                        </View>
                    </TouchableOpacity>
                    

                    {/* button@Register */}
                    <TouchableOpacity
                        onPress={()=>{onRegister()}}>
                        <View style={{
                            width: wp(80),
                            height: hp(8),
                            // backgroundColor: "blue",
                            borderRadius: 7,
                            borderColor: "#694fad",
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: 2,
                            marginBottom: hp(6)
                        }}>
                            <Text style={{
                                fontFamily: "circular-black",
                                fontSize: 25,
                                color: "#694fad",
                            }}>
                                Register
                            </Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}

export default Welcome;