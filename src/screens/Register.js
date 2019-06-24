import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Register extends Component {
    constructor(props)
    {
        super()
        onRegister=(props)=>{
            this.props.navigation.navigate('Login')
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
                {/* <Image source={require("./../../assets/purple_mountains.jpg")} 
                    style={{
                        resizeMode: "cover"
                    }}/> */}
                <Text style={{
                        // paddingLeft: wp(2),
                        marginTop: hp(10),
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
                                fontFamily: "circular-book",
                                flex: 1,
                                padding: 5,
                            }}    
                            placeholder={'Username'}
                        />
                    </View>

                    {/* Input Name */}
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
                        <AntDesign name="API" size={18} color="#694fad" style={{
                            padding: 5,
                        }}/>
                        <TextInput 
                            returnKeyType = { "next" }
                            onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                            ref={(input) => { this.secondTextInput = input; }}
                            style={{
                                fontFamily: "circular-book",
                                flex: 1,
                                padding: 5,
                            }}    
                            placeholder={'Name'}
                        />
                    </View>

                    {/* Input Email */}
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
                        <MaterialCommunityIcons name="email" size={18} color="#694fad" style={{
                            padding: 5,
                        }}/>
                        <TextInput 
                            returnKeyType = { "next" }
                            onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                            ref={(input) => { this.thirdTextInput = input; }}
                            keyboardType={"email-address"}
                            style={{
                                fontFamily: "circular-book",
                                flex: 1,
                                padding: 5,
                            }}    
                            placeholder={'Email'}
                        />
                    </View>


                    {/* Input Field Mobile Number */}
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
                        <AntDesign name="contacts" size={18} color="#694fad" style={{
                            padding: 5,
                        }}/>
                        <TextInput 
                            returnKeyType = { "next" }
                            onSubmitEditing={() => { this.fifthTextInput.focus(); }}
                            ref={(input) => { this.fourthTextInput = input; }}
                            keyboardType={"phone-pad"}
                            style={{
                                fontFamily: "circular-book",
                                flex: 1,
                                padding: 5,
                            }}    
                            placeholder={'Phone Number'}
                        />
                    </View>
                    
                    {/* Input Field Password */}
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
                            // returnKeyType = { "next" }
                            // onSubmitEditing={() => { this.sixthTextInput.focus(); }}
                            ref={(input) => { this.fifthTextInput = input; }}
                            secureTextEntry={true}
                            style={{
                                fontFamily: "circular-book",
                                flex: 1,
                                padding: 5,
                            }}    
                            placeholder={' Password'}
                        />

                        
                    </View>

                    {/* The Register Button */}
                    <TouchableOpacity
                    onPress={()=>{onRegister()}}>
                    <View style={{
                        width: wp(90),
                        height: hp(7),
                        borderColor: "#694fad",
                        borderRadius: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: hp(5),
                        borderWidth: 4,
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
                    {/* <View style={{ height: hp(10), width: wp(90) }} /> */}
          </KeyboardAwareScrollView>
          </View>
        );
    }
}

export default Register;