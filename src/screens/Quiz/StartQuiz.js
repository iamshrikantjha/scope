import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class StartQuiz extends Component {
    constructor(props){
        super()
        {
            
        }
        onStartTest = (props) => {
            this.props.navigation.navigate('Quiz')
        }
    }
    render() {
        const {height, width} = Dimensions.get('window');
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    // marginLeft: wp(5),
                    // marginRight: wp(5),
                    margin: wp(5),
                    // backgroundColor: "pink"
                }}>
                    <View style={{
                        backgroundColor: "#694fad",
                        borderRadius: wp(100),
                        // borderColor: "#694fad",
                        // borderWidth: 1,
                        width: hp(6),
                        height: hp(6),
                        alignItems: "center",
                        justifyContent: "center",
                        elevation: 7,
                        // marginTop: wp(3),
                        // marginLeft: wp(3),
                        flexDirection: "row", 
                        
                    }}>
                        <Ionicons name="md-arrow-round-back" size={hp(4)} color="white" />
                    </View>
                    <Image source={require("./../../../assets/exam.jpg")} 
                                style={{
                                    width: hp(20),
                                    height: hp(20),
                                    borderRadius: 100,
                                    // marginLeft: wp(30)
                                    backgroundColor: "pink",
                                    // elevation: 7
                                }}/>
                </View>

                {/* Button And Image */}
                <Text style={{
                    position: "absolute",
                    marginTop: hp(20),
                    fontFamily: "circular-book",
                    marginLeft: wp(5),
                    fontSize: hp(2.5),
                    color: "#694fad",
                }}>
                    Introduction
                </Text>
                <Text style={{
                    // position: "absolute",
                    // marginTop: hp(25),
                    marginLeft: wp(5),
                    marginBottom: hp(1.7),
                    width: wp(60),
                    fontFamily: "circular-medium",
                    fontSize: hp(2.7),
                    // backgroundColor: "yellow",
                    color: "#694fad",
                }}>
                    Data Interpretation Analysis
                </Text>

                {/* Label Off */}

                <View style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    
                }}>
                    {/* Section */}
                    <View style={{
                        width: wp(40),
                        height: hp(10),
                        flexDirection: "row",
                        // backgroundColor: "blue",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        marginLeft: wp(5),
                    }}>
                        <FontAwesome5 name="question" size={hp(5)} color="#694fad" />
                        <View style={{
                            flexDirection: "column",
                            // backgroundColor: "green",
                        }}>
                            <Text style={{
                                fontFamily: "circular-black",
                                fontSize: hp(4),
                                color: "#694fad",
                            }}>
                                20
                            </Text>
                            <Text style={{
                                fontFamily: "circular-book",
                                color: "#694fad",
                            }}>
                                Questions
                            </Text>
                        </View>  
                    </View>

                     {/* Section */}
                     <View style={{
                        width: wp(40),
                        height: hp(10),
                        // marginTop: hp(1.7),
                        flexDirection: "row",
                        // backgroundColor: "blue",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}>
                        <Entypo name="stopwatch" size={hp(5)} color="#694fad" />
                        <View style={{
                            flexDirection: "column",
                            // backgroundColor: "green",
                        }}>
                            <Text style={{
                                fontFamily: "circular-black",
                                fontSize: hp(4),
                                color: "#694fad",
                            }}>
                                30
                            </Text>
                            <Text style={{
                                fontFamily: "circular-book",
                                color: "#694fad",
                            }}>
                                Minutes
                            </Text>
                        </View>  
                    </View>
                </View>
                {/* Instructions */}
                <Text style={{
                    fontFamily: "circular-bold",
                    fontSize: hp(2.7),
                    // color: "black"
                    margin: hp(2),
                }}>
                    Instructions
                </Text>

                {/* List begins */}
                <View>
                    <Text style={{
                        fontFamily: "circular-book",
                        marginLeft: wp(5),
                        marginRight: wp(5),
                    }}>
                        1. This test consists of 20 multiple choice questions with 4 options each, out of which there is ONLY one correct option.
                    </Text>

                    <Text style={{
                        fontFamily: "circular-book",
                        marginTop: hp(1),
                        marginLeft: wp(5),
                        marginRight: wp(5),
                    }}>
                        2. Every correct answer is awarded 3 marks and every wrong answer is penalised with 1 mark. There are no negative marks for unattempted
                        questions.
                    </Text>

                    <Text style={{
                        fontFamily: "circular-book",
                        marginTop: hp(1),
                        marginLeft: wp(5),
                        marginRight: wp(5),
                    }}>
                        3. Use of any electronic gadgets like calculators, mobile phones, etc are strictly prohibited.
                    </Text>
                </View>
                
                {/* button@Login */}
                <TouchableOpacity 
                    onPress={()=>{onStartTest()}}>
                    <View style={{
                            width: wp(80),
                            height: hp(8),
                            backgroundColor: "#694fad",
                            borderRadius: 7,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: hp(13),
                            marginLeft: wp(10),
                            elevation: 5,
                        }}>
                            <Text style={{
                                fontFamily: "circular-black",
                                fontSize: hp(4),
                                color: "white",
                            }}>
                                Test
                            </Text>
                        </View>
                </TouchableOpacity>
                
                    
                {/* </View> */}
            </View>
        )
    }
}

export default StartQuiz;