import React, { Component } from 'react'
import { View, Text, Dimensions, Image } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import MiniCardInfo from './MiniCardInfo';

import axios from 'axios';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Profile extends Component {
    
    // state={
    //     first_name : '',
    //     last_name : '',
    //     country:'',
    //     phone_number:'',
    //     username:'',
    // }
    // componentDidMount = () =>{
    //     console.log('Started'),
    //     axios.get('http://192.168.43.34:8000/person/1/')
    //     .then(response => response.data)
    //     .then((data)=>{
    //         console.log('Start Setting'),
    //         console.log(data),
    //         this.setState({
    //             first_name: data.first_name,
    //             last_name: data.last_name,
    //             country: data.country,
    //             username: data.username,
    //             phone_number: data.phone_number,
    //         })
    //         console.log(data)
    //         console.log('Ends')
    //     })
    // }
    render() {
        const {height, width} = Dimensions.get('window');
        return (
            <View style={{
                flex: 1,
                backgroundColor: "#f2f2f2",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <View style={{
                    width: wp(94),
                    height: hp(30),
                    backgroundColor: "white",
                    margin: hp(2),
                    elevation: 5,
                    borderRadius: 5,

                    // justifyContent: "center",
                    // alignItems: "center",
                }}>
                    <View style={{
                        // flex: 1,
                        marginTop: hp(3),
                        marginLeft: wp(30),
                        width: height/6.5,
                        height: height/6.5,
                        // width: wp(32),
                        // height: hp(15),
                        backgroundColor: "pink",
                        borderRadius: 100,
                        overflow: "hidden",

                    }}>
                        <Image 
                            style={{
                                width: height/6.5,
                                height: height/6.5,
                                // width: wp(32),
                                // height: hp(15),
                            }}
                            elevation={8}
                            resizeMode={"cover"}
                            
                            source={require('./../../assets/profile2.jpg')} />
                            
                    </View>
                    <View style={{
                            width: hp(4),
                            height: hp(4),
                            marginTop: hp(15),
                            marginLeft: wp(50),
                            // marginRight: wp(70),
                            backgroundColor: "white",
                            position: "absolute",
                            borderRadius: 100,
                            elevation: 5,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Entypo name="camera" size={hp(2.4)} color="#694fad" />
                    </View>

                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                    }}>
                        <Text style={{
                            fontFamily: "circular-medium",
                            fontSize: 20,
                            color: "#694fad",
                        }}>
                            {/* {this.state.first_name} {this.state.last_name}  */}
                            John Doe
                        </Text>
                        <Text style={{
                            fontFamily: "circular-medium",
                            color: "#694fad",
                            paddingTop: hp(0.3),
                        }}>
                            {/* @{this.state.username} */}
                            @johndoe
                        </Text>
                    </View>

                </View>
                {/* Upper Card Complete */}
                <View style={{
                    flexDirection: "row",
                    width: wp(94),
                    height: hp(10),
                    backgroundColor: "#694fad",
                    elevation: 7,
                    borderRadius: 5,
                    paddingHorizontal: wp(2),
                    // justifyContent: "space-evenly",
                    alignItems: "center"
                }}>
                    {/* <View style={{
                        width: wp(10),
                        height: hp(4),
                        padding: 6,
                        flex: 1,
                        // backgroundColor: "white",
                    }}> */}
                        <Entypo name="google-play" size={55} color="white" style={{
                            paddingHorizontal: wp(1.7),
                        }}/>
                    {/* </View> */}
                        <Text style={{
                            fontFamily: "circular-book",
                            color: "white",
                            paddingHorizontal: wp(5),
                        }}>
                            Invite your friends and{"\n"}earn free rewards
                        </Text>
                        <Entypo name="share" size={50} color="white" style={{
                            paddingHorizontal: wp(5),
                        }}/>
                </View>

                {/* Invite Card Complete */}
                <View style={{
                    // width: wp(98),
                    // height: hp(7),
                    marginTop: hp(3),
                    flexDirection: "column",
                    // backgroundColor: "pink"
                    alignItems: "center",
                }}>

                    {/* Mini Card Info */}
                    {/* <MiniCardInfo iname={'user'} handle={'Username'} info={this.state.username}/> */}
                    <MiniCardInfo iname={'user'} handle={'Username'} info={'John Doe'}/>
                    

                    {/* <MiniCardInfo iname={'phone'} handle={'Phone Number'} info={this.state.phone_number}/> */}
                    <MiniCardInfo iname={'phone'} handle={'Phone Number'} info={'+91 9876xxxxx'}/>


                    <MiniCardInfo iname={'watch'} handle={'Date Of Birth'} info={'1 January 19xx'}/>
                   

                    {/* <MiniCardInfo iname={'home'} handle={'Country'} info={this.state.country}/> */}
                    <MiniCardInfo iname={'home'} handle={'Country'} info={'USA'}/>
                    

                    <MiniCardInfo iname={'feather'} handle={'Subscription'} info={'Gold'}/>
                   


                    
                </View>
               
            </View>
        )
    }
}

export default Profile;