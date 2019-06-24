import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import Pie from 'react-native-pie'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
        onAsk = (props) => {
            this.props.navigation.navigate('ContactUs')
        }
        }
        
        componentDidMount() {
        requestAnimationFrame(() => {
            this.setState({
            isVisible: true,
            });
        });
        }
      
  render() {
    if (!this.state.isVisible) {
        return null;
      }
    return (
      <View style={{
          flex: 1,
      }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // marginLeft: wp(5),
            // marginRight: wp(5),
            margin: wp(5)
            // backgroundColor: "pink"
          }}
        >
          <View
            style={{
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
              flexDirection: "row"
            }}
          >
            <Ionicons name="md-arrow-round-back" size={hp(4)} color="white" />
          </View>
          <Image
            source={require('../../../assets/quiza.png')}
            style={{
              width: hp(20),
              height: hp(20),
              borderRadius: 100
              // marginLeft: wp(30)
              // backgroundColor: "pink",
              // elevation: 7
            }}
          />
        </View>

        {/* Button And Image */}
        <Text
          style={{
            position: "absolute",
            marginTop: hp(20),
            fontFamily: "circular-book",
            marginLeft: wp(5),
            fontSize: hp(2.5),
            color: "#694fad",
            // backgroundColor: "pink",
            width: wp(50),
            // marginBottom: hp(2)
          }}
        >
          Introduction
        </Text>
        <Text
          style={{
            // position: "absolute",
            // marginTop: hp(3),
            marginLeft: wp(5),
            marginBottom: hp(1.7),
            width: wp(60),
            fontFamily: "circular-medium",
            fontSize: hp(2.7),
            // backgroundColor: "yellow",
            color: "#694fad",
          }}
        >
          Highlights
        </Text>
        {/* Label Off */}

        {/* Performance */}

        <View style={{
            width: wp(100),
            height: hp(10),
            // backgroundColor: "pink",
            paddingLeft: wp(5),
            paddingRight: wp(5),
            justifyContent: "center",
        }}>
            <Text style={{
                fontFamily: "circular-black",
                fontSize: hp(2.4)
            }}>
                Performance: Learn
            </Text>
            <Text style={{
                fontFamily: "circular-book",
            }}>
                Learn the topic in Key focus areas and attempt again. We know you can do a lot better.
            </Text>
        </View>
        
        {/* Score and Solution */}
        <Text style={{
                fontFamily: "circular-black",
                fontSize: hp(2.4),
                marginLeft: wp(5),
                marginTop: hp(1),
            }}>
                Score and Solutions
            </Text>
        <View style={{
            width: wp(100),
            height: hp(18),
            // backgroundColor: "pink",
            marginTop: hp(2),
            flexDirection: "row",
            alignItems: "center",
        }}>
            
            {/* Pie & Result */}
            
            <View style={{
                width: wp(50),
                height: hp(25),
                // backgroundColor: "skyblue",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Pie
                    radius={50}
                    innerRadius={40}
                    series={[40]}
                    colors={['#96cb7f']}
                    backgroundColor='#ddd' />
            </View>

            {/* rightbox */}
            <View style={{
                position: "absolute",
                marginLeft: wp(50),
                flexDirection: "column",
                width: wp(50),
                height: hp(25),
                // backgroundColor: "lightgreen",
                justifyContent: "space-evenly"
            }}>

                {/* Minibox    */}
                <View style={{
                    width: wp(40),
                    height: hp(5),
                    // backgroundColor: "grey",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}>
                    <Entypo name="check" size={hp(2)} color="#00994d" />
                    <Text style={{
                        fontFamily: "circular-book",
                        fontSize: hp(2),
                    }}>
                        0 
                    </Text>
                    <Text style={{
                        fontFamily: "circular-book",
                        fontSize: hp(2),
                    }}>
                         Incorrect
                    </Text>
                </View>

                {/* Minibox    */}
                <View style={{
                    width: wp(40),
                    height: hp(5),
                    // backgroundColor: "grey",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}>
                    <Entypo name="cross" size={hp(2)} color="#ff6666" />
                    <Text style={{
                        fontFamily: "circular-book",
                        fontSize: hp(2),
                    }}>
                        0 
                    </Text>
                    <Text style={{
                        fontFamily: "circular-book",
                        fontSize: hp(2),
                    }}>
                         Incorrect
                    </Text>
                </View>
                {/* Minibox    */}
                <View style={{
                    width: wp(45),
                    height: hp(5),
                    // backgroundColor: "grey",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}>
                    <Entypo name="controller-fast-forward" size={hp(2)} color="orange" />
                    <Text style={{
                        fontFamily: "circular-book",
                        fontSize: hp(2),
                    }}>
                        20 
                    </Text>
                    <Text style={{
                        fontFamily: "circular-book",
                        fontSize: hp(2),
                    }}>
                         Unanswered
                    </Text>
                </View>
            </View>
        </View>
        {/* Suggestion */}
        <View style={{
            marginTop: wp(5),
            marginLeft: wp(5),
            marginRight: wp(5),
            marginBottom: wp(5),
        }}>
            <Text style={{
                fontFamily: "circular-black",
                fontSize: hp(2.4),
                marginTop: hp(1),
                marginBottom: hp(1),
            }}>
                Talk to our expert
            </Text>
            <Text style={{
                fontFamily: "circular-medium",
                // margin: hp(1),
                fontSize: hp(2),
                marginBottom: hp(1),
            }}>
                Hi, John Doe
            </Text>
            <Text style={{
                fontFamily: "circular-book",

            }}>
                Our expert mentors can create a free lesson plan personalised for you. Would you like to call with one of them?
            </Text>
        </View>

            {/* AskButton */}
            <TouchableOpacity
                onPress={()=>{onAsk()}}>
                <View style={{
                borderRadius: 100,
                marginTop: hp(2),
                marginLeft: wp(30),
                width: wp(40),
                height: hp(6),
                backgroundColor: "#694fad",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Text style={{
                    fontFamily: "circular-medium",
                    color: "white",
                    fontSize: hp(2.1),
                }}>
                    Sure let's do it
                </Text>
            </View>
            </TouchableOpacity>
        
        
      </View>
    );
  }
}

export default Result;
