import React from 'react'
import { View, Text, Image } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function RecentCourse(props) {
    return (
        <View style={{
            width: wp(50),
            height: hp(20),
            // backgroundColor: "purple",
            borderRadius: 5,
            margin: 3,
            overflow: 'hidden',
            elevation: 5,
        }}>
            <Image
            style={{
                // width: wp(50),
                // height: hp(20),
            }}
            blurRadius={1}
            resizeMode={'contain'}
            source={props.image} />
            <View style={{
                width: wp(50),
                height: hp(7),
                // backgroundColor: "grey",
                backgroundColor: 'rgba(0, 181, 204, 0.8)',
                position: "absolute",
                marginTop: hp(13),
                padding: 6,
            }}>
                <Text style={{
                    fontFamily: "circular-medium",
                    fontSize: 13,
                    color: "#454545"
                }}>
                    {props.name}
                </Text>
            </View>

            {/* Notifications */}
            

        </View>
    )
}
