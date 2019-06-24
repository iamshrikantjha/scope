import React from 'react'
import { View, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function ExploreMini() {
    return (
        <View style={{
            width: wp(35),
            height: hp(15),
            backgroundColor: "green",
            margin: wp(2),
            borderRadius: 3,
            
        }}>

        </View>
    )
}
