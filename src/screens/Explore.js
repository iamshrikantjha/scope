import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ExploreMini from './ExploreMini';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Explore extends Component {
    constructor(props){
        super()
        {
            
        }
        onTest = (props) => {
            this.props.navigation.navigate('QuizList')
        }
    }
    render() {
        return (
            <View style={{
                flex: 1,
                
            }}>
                <Text style={{
                    fontSize: 45,
                    fontFamily: "circular-medium",
                    color: "#694fad",
                    marginTop: hp(5),
                    marginBottom: hp(3),
                    paddingHorizontal: wp(4),
                }}>
                    Explore
                </Text>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    // paddingLeft: wp(1),
                }}>
                    {/* Explore */}
                    <View style={{
                        width: wp(30),
                        height: hp(14),
                        backgroundColor: "#694fad",
                        margin: 8,
                        borderRadius: 5,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <FontAwesome name="book" size={30} color="white" style={{
                            paddingHorizontal: wp(1.7),
                        }}/>
                        <Text style={{
                            fontFamily: "circular-book",
                            fontSize: 13,
                            color: "white",
                            paddingTop: hp(1), 
                        }}> 
                            Books
                        </Text>


                    </View>

                    {/* Other Boxes */}
                    <View style={{
                        // backgroundColor: "grey",
                        width: wp(62),
                        flexDirection: "row",
                        flexWrap: "wrap", 
                        justifyContent: "space-around",
                        alignItems: "center",
                        paddingTop: hp(0.7),
                    }}>
                        {/* Box 1 */}
                        <TouchableOpacity
                            onPress={()=>{onTest()}}>
                            <View style={{
                                width: wp(28),
                                height: hp(6),
                                backgroundColor: "#00cc66",
                                margin: 5,
                                borderRadius: 4,
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "row",
                            }}>
                                <MaterialCommunityIcons name="test-tube" size={22} color="white" style={{
                                paddingHorizontal: wp(1.7),
                                }}/>
                                <Text style={{
                                    fontFamily: "circular-book",
                                    fontSize: 11.5,
                                    color: "white",
                                    paddingTop: hp(1), 
                                }}> 
                                    Tests
                                </Text>

                            </View>
                        </TouchableOpacity>
                        

                        {/* Box 2 */}
                        <View style={{
                            width: wp(28),
                            height: hp(6),
                            backgroundColor: "#33cccc",
                            margin: 5,
                            borderRadius: 4,
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                        }}>
                            <Ionicons name="ios-help-buoy" size={22} color="white" style={{
                            paddingHorizontal: wp(1.7),
                            }}/>
                            <Text style={{
                                fontFamily: "circular-book",
                                fontSize: 11.5,
                                color: "white",
                                paddingTop: hp(1), 
                            }}> 
                                Help
                            </Text>
                        </View>

                        {/* Box 3 */}
                        <View style={{
                            width: wp(28),
                            height: hp(6),
                            backgroundColor: "orange",
                            margin: 5,
                            borderRadius: 4,
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                        }}>
                            <FontAwesome name="tags" size={22} color="white" style={{
                            paddingHorizontal: wp(1.7),
                            }}/>
                            <Text style={{
                                fontFamily: "circular-book",
                                fontSize: 11.5,
                                color: "white",
                                paddingTop: hp(1), 
                            }}> 
                                Tagged
                            </Text>
                        </View>

                        {/* Box 4 */}
                        <View style={{
                            width: wp(28),
                            height: hp(6),
                            backgroundColor: "pink",
                            margin: 5,
                            borderRadius: 4,
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                        }}>
                            <FontAwesome name="question-circle" size={22} color="white" style={{
                            paddingHorizontal: wp(1.7),
                            }}/>
                            <Text style={{
                                fontFamily: "circular-book",
                                fontSize: 11.5,
                                color: "white",
                                paddingTop: hp(1), 
                            }}> 
                                Doubts
                            </Text>
                        </View>
                    </View>
                </View>
                {/* Singular Start */}
                {/* <View style={
                    flexDirection: "column"
                }> */}
                {/* #########################################################################################   */}
                        {/* Popular Courses */}
                        <Text style={{
                            fontSize: 20,
                            fontFamily: "circular-medium",
                            marginTop: hp(3),
                            paddingHorizontal: wp(4),
                            color: "#694fad",
                        }}>
                            Popular Courses
                        </Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            paddingLeft: wp(1),
                            paddingRight: wp(3),
                            // backgroundColor: "grey",
                            // height: hp(20),
                            // flex: 1,
                            // marginBottom: hp(5),
                            
                        }}>
                            <ExploreMini />
                            <ExploreMini />
                            <ExploreMini />
                            
                        </ScrollView>

                        {/* ######################################################################################### */}

                        {/* #########################################################################################   */}
                        {/* Top Deals */}
                        <Text style={{
                            fontSize: 20,
                            fontFamily: "circular-medium",
                            // marginTop: hp(3),
                            paddingHorizontal: wp(4),
                            color: "#694fad",
                        }}>
                            Top Deals
                        </Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            paddingLeft: wp(1),
                            paddingRight: wp(3),
                            
                        }}>
                            <ExploreMini />
                            <ExploreMini />
                            <ExploreMini />
                            
                        </ScrollView>

                {/* ######################################################################################### */}
                        {/* </View> */}
                {/* Singular Ends */}
                
                

            </View>
        )
    }
}

export default Explore;