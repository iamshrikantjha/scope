import React from 'react'
import { View, Text, Image } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RadioButton } from 'react-native-paper';

export default function QuizO(props) {
    return (
        <View>
            {/* Option */}
         <View style={{
            width: wp(74),
            height: hp(6),
            borderWidth: 2,
            marginLeft: wp(13),
            marginTop: hp(2),
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#694fad",
        }}>
            <Text style={{
                fontFamily: "circular-black",
                color: "#694fad",
                fontSize: hp(2.3),
                // margin: 5,
                marginLeft: wp(3),
            }}>
                {props.option}.
            </Text>
            <Text style={{
                fontFamily: "circular-book",
                fontSize: hp(2),
                color: "black",
                paddingHorizontal: wp(2),
            }}>
                {props.name}
            </Text>

            <View style={{
                    position: "absolute",
                    marginRight: wp(5),
                    marginLeft: wp(60),
                    // backgroundColor: "grey",    
            }}>
                <RadioButton
                value={props.value}
                status={props.status}
                onPress={props.onPress}
                />
            </View>
        </View>
        </View>
         
    )
}
