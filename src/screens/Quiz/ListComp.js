import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function ListComp(props) {
    return (
        <View style={{
            // alignItems: "center",
            justifyContent: "space-between",
            marginTop: hp(2),
            // marginBottom: hp(1),
        }}>
            <View style={{
                marginBottom: hp(0.7)
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingLeft: wp(5),
                    paddingRight: wp(5),
                    marginBottom: hp(1),

                }}>
                    <Text style={{
                        fontFamily: "circular-book",
                        fontSize: hp(2)
                    }}>
                        {props.coursen}
                    </Text>
                    <TouchableOpacity
                        onPress={()=>{props.onPress()}}>
                        <View style={{
                            width: wp(20),
                            height: hp(3),
                            backgroundColor: "#694fad",
                            borderRadius: 100,
                            alignItems: "center",
                            justifyContent: "center",

                        }}>
                            <Text style={{
                                fontSize: hp(1.6),
                                fontFamily: "circular-medium",
                                color: "white",
                            }}>
                                Submit
                            </Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
            
            <View
                style={{
                    borderBottomColor: '#694fad',
                    borderBottomWidth: 1,
                    width: wp(70),
                    marginLeft: wp(15),
                }}
                >
            </View>
        </View>
        
       
    )
}

export default ListComp;