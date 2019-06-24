import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import QuizO from './QuizO';
import { RadioButton } from 'react-native-paper';

// <Feather name="user" size={18} color="#694fad" />

class Quiz extends Component {
    constructor(props){
        super()
        {
            
        }
        onResult = (props) => {
            this.props.navigation.navigate('Result')
        }
    }
    state = {
        checked: 'first',
        // first: '',
        second: '',
        third: '',
        fourth: '',
      };

    render() {
        const { checked } = this.state;

        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    width: wp(100),
                    height: hp(10),
                    // backgroundColor: "pink",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: wp(5)
                }}>
                    <MaterialCommunityIcons name="pause-circle-outline" size={35} color="#694fad" />
                    <Text style={{
                        fontFamily: "circular-medium",
                        fontSize: hp(2.4),
                        paddingHorizontal: wp(2),
                        color: "#694fad",
                    }}>
                        45:00
                    </Text>
                    {/* Submit */}
                    <TouchableOpacity
                        onPress={()=>{onResult()}}>
                        <View style={{
                            width: wp(20),
                            height: hp(4.3),
                            backgroundColor: "#694fad",
                            borderRadius: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: wp(40),
                        }}>
                            <Text style={{
                            fontFamily: "circular-medium",
                            fontSize: hp(2),
                            // paddingHorizontal: wp(2),
                            color: "white",
                            }}>
                                Submit
                            </Text>       
                        </View>
                    </TouchableOpacity>
                    
                </View>

                {/* Timer Header Ends Here */}
                

                {/* Question Begins */}
                <View style={{
                    width: wp(100),
                    height: hp(90),
                    // backgroundColor: "yellow",
                    
                }}>
                    <View style={{
                        flexDirection: "row",
                        // alignItems: "center"
                        // marginTop: hp(4),
                        marginLeft: wp(13)
                    }}>
                        <Text style={{
                            fontFamily: "circular-black",
                            fontSize: hp(4),
                            color: "#694fad",
                        }}>
                            Question 1
                        </Text>
                        <Text style={{
                            fontFamily: "circular-book",
                            fontSize: hp(2.3),
                            paddingTop: hp(2),
                            paddingHorizontal: wp(1),
                            color: "#694fad",
                        }}>
                            /20
                        </Text>
                    </View>
                    {/* <View
                        style={{
                            borderBottomColor: '#694fad',
                            borderBottomWidth: 1,
                            borderStyle: "dotted",
                            width: wp(65),
                            height: hp(5),
                            borderRadius: 1,
                        }}
                    /> */}
                    <View style={{
                        borderStyle: 'dotted',
                        borderWidth: 1,
                        borderRadius: 1,
                        borderColor: "#694fad",
                        width: wp(74),
                        marginTop: hp(2),
                        marginLeft: wp(13),
                    }}>
                    </View>
                     {/* Dotted Line Ends Here */}

                    {/* Image */}
                    <View style={{
                        width: wp(100),
                        height: hp(25),
                        // backgroundColor: "grey",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Image source={require("./../../../assets/quiz1.jpg")} 
                        resizeMode={"contain"}
                        style={{
                            borderRadius: 4,
                            flex: 1,
                            width: wp(74),
                            height: hp(10),
                        }}/>
                    </View>
                    {/* Image Off */}

                    <Text style={{
                        fontFamily: "circular-book",
                        fontSize: hp(2.3),
                        marginLeft: wp(13),
                        marginRight: wp(13),
                        marginTop: hp(1),
                        color: "black",
                    }}>
                        Who played the popular and iconic role of Iron Man?
                    </Text>
                    

                    <QuizO name={"Robert Downy Jr."} 
                    option={"a"}
                    value={"first"}
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'first' }); }} />

                    <QuizO name={"Amitabh Bacchan"}
                    option={"b"}
                    value={"second"}
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'second' }); }} />

                    <QuizO name={"Kishor Kumar"}
                    option={"c"}
                    value={"third"}
                    status={checked === 'third' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'third' }); }} />

                    <QuizO name={"John Doe"}
                    option={"d"}
                    value={"fourth"}
                    status={checked === 'fourth' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'fourth' }); }} />

                    {/* NextButton */}

                    <TouchableOpacity
                        onPress={()=>{onResult()}}>
                        <View style={{
                            width: wp(74),
                            height: hp(6),
                            backgroundColor: "#694fad",
                            borderRadius: 7,
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: wp(13),
                            margin: hp(3),
                        }}>
                            <Text style={{
                                fontFamily: "circular-black",
                                fontSize: 20,
                                color: "white",
                            }}>
                                Next
                            </Text>
                        </View>
                    </TouchableOpacity>
                    

                </View>
                {/* Question Ends */}
            </View>
        )
    }
}

export default Quiz;