import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ListComp from './ListComp';
import { TouchableOpacity } from 'react-native-gesture-handler';

class QuizList extends Component {
    constructor(props){
        super()
        {
            
        }
        onStartQuiz = (props) => {
            this.props.navigation.navigate('StartQuiz')
        }
    }
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                {/* Header */}
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
                        <Image source={{uri:'https://www.smartaboutmoney.org/portals/0/Images/Courses/Quiz-clipboard.png'}} 
                                style={{
                                    width: hp(20),
                                    height: hp(20),
                                    borderRadius: 100,
                                    // marginLeft: wp(30)
                                    // backgroundColor: "pink",
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

                <Text style={{
                    fontFamily: "circular-black",
                    fontSize: hp(2.5),
                    marginLeft: wp(5),
                    marginTop: hp(2),
                    marginBottom: hp(2),
                }}>
                    Tests
                </Text>
                <ScrollView>
                    <ListComp coursen={'Data Interpretation Test 01'} onPress={()=>{onStartQuiz()}}/>
                    <ListComp coursen={'Data Interpretation Test 02'} onPress={()=>{onStartQuiz()}}/>
                    <ListComp coursen={'Data Interpretation Test 03'} onPress={()=>{onStartQuiz()}}/>
                    <ListComp coursen={'Data Interpretation Test 04'} onPress={()=>{onStartQuiz()}}/>
                    <ListComp coursen={'Data Interpretation Test 05'} onPress={()=>{onStartQuiz()}}/>
                    <ListComp coursen={'Data Interpretation Test 06'} onPress={()=>{onStartQuiz()}}/>
                    <ListComp coursen={'Data Interpretation Test 07'} onPress={()=>{onStartQuiz()}}/>

                </ScrollView>
            </View>
        )
    }
}

export default QuizList;