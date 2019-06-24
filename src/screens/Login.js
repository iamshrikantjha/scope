import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Login extends Component {
    constructor(props)
    {
        super()
        onLogin=(props)=>{
            this.props.navigation.navigate('Home')
        }
    }
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
          <KeyboardAwareScrollView
            // extraHeight={50}
            enableOnAndroid={true}
            // enableAutomaticScroll={(Platform.OS === 'ios')}
            style={{
                //   height: hp(70),
                //   width: wp(80),
                flex:1,
                padding: wp(5),
            //    backgroundColor: "pink" 
            }}>
                <Text style={{
                        // paddingLeft: wp(2),
                        marginTop: hp(25),
                        // paddingTop: hp(10),
                        fontSize: 55,
                        fontFamily: "circular-black",
                        color: "#694fad",
                        // fontWeight: "bold",
                    }}>
                        Scope
                    </Text>

                    <View style={{
                        width: wp(90),
                        height: hp(6),
                        marginTop: hp(9),
                        // backgroundColor: "red",
                        borderRadius: 6,
                        // flex: 1,
                        paddingHorizontal: wp(2),
                        borderWidth: 2,
                        borderColor: "#694fad",
                        borderRadius: 100,
                        alignItems: "center",
                        flexDirection: "row",
                    }}>
                        <Feather name="user" size={18} color="#694fad" style={{
                            padding: 5,
                        }}/>
                        <TextInput 
                            returnKeyType = { "next" }
                            onSubmitEditing={() => { this.secondTextInput.focus(); }}
                            style={{
                                
                                flex: 1,
                                fontFamily: "circular-book",
                                padding: 5,
                            }}    
                            placeholder={'Username'}
                        />
                    </View>
                    

                    <View style={{
                        width: wp(90),
                        height: hp(6),
                        marginTop: hp(3),
                        // backgroundColor: "red",
                        borderRadius: 6,
                        // flex: 1,
                        paddingHorizontal: wp(2),
                        borderWidth: 2,
                        borderColor: "#694fad",
                        borderRadius: 100,
                        alignItems: "center",
                        flexDirection: "row",
                    }}>
                        <Ionicons name="md-lock" size={18} color="#694fad" style={{
                            padding: 5,
                        }}/>
                        <TextInput 
                            ref={(input) => { this.secondTextInput = input; }}
                            secureTextEntry={true}
                            style={{
                                flex: 1,
                                fontFamily: "circular-book",
                                padding: 5,
                            }}    
                            placeholder={'Password'}
                        />

                        
                    </View>
                    
                    <TouchableOpacity
                        onPress={()=>{onLogin()}}>
                        {/* The Login Button */}
                        <View style={{
                            width: wp(90),
                            height: hp(8),
                            backgroundColor: "#694fad",
                            borderRadius: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: hp(5),
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
                    
                        
                    {/* <View style={{ height: hp(10), width: wp(90) }} /> */}
          </KeyboardAwareScrollView>
          </View>
        );
    }
}

export default Login;