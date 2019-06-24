import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function MiniCardInfo(props) {
    return (
        <View style={{
            alignItems: "center",
        }}>
        <View style={{
            flexDirection: "row",
            width: wp(98),
            height: hp(7),
            // backgroundColor: "red",
            alignItems: "center",
        }}>
            <Feather name={props.iname} size={26} color="#694fad" style={{
                paddingHorizontal: wp(5),
            }}/>
            <Text style={{
                fontFamily: "circular-medium",
                color: "#694fad",
            }}>
                {props.handle}
            </Text>
            <Text style={{
                position: "absolute",
                fontFamily: "circular-book",
                color: "#694fad",
                paddingLeft: wp(50),
            }}>
                {props.info}
            </Text>
            
        </View>
        <View
        style={{
            borderBottomColor: '#694fad',
            borderBottomWidth: 1,
            width: wp(65),
        }}
    />
    </View>
    )
}
