import React, { Component } from 'react'
import { View, Text, ScrollView, Image } from 'react-native';

import Pie from 'react-native-pie'
import RecentCourse from './RecentCourse';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Dashboard extends Component {
    render() {
        return (
            <View>
                
                 <View style={{
                    marginTop: hp(6),
                    // backgroundColor: "grey",
                    padding: wp(5),
                }}>
                    <Text style={{
                        fontFamily: "circular-medium",
                        fontSize: 20,
                        paddingBottom: hp(3),
                        color: "black",
                    }}>
                        Your Performance
                    </Text>
                    <View style={{
                        // flex: 1,
                        height: hp(20),
                        // width: wp(100),
                        flexDirection: "row",
                        // backgroundColor: "pink",
                        justifyContent: "space-between",
                    }}>
                        <Pie
                            radius={50}
                            innerRadius={40}
                            series={[40]}
                            colors={['#96cb7f']}
                            backgroundColor='#ddd' />
                        <View style={{
                            position: "absolute",
                            paddingLeft: wp(7.7),
                            paddingTop: hp(2.5),
                        }}>
                            <Text style={{
                                fontFamily: "circular-book",
                                color: "black",
                                fontSize: 20,
                            }}>
                                4/12
                            </Text>
                            <Text style={{
                                fontFamily: "circular-book",
                                color: "black",
                                fontSize: 10,
                            }}>
                                Chapters
                            </Text>
                            <Text style={{
                                fontFamily: "circular-book",
                                color: "black",
                                fontSize: 10,
                            }}>
                                Completed
                            </Text>
                        </View>
                        <Pie
                            radius={50}
                            innerRadius={40}
                            series={[60]}
                            colors={['#87ceeb']}
                            backgroundColor='#ddd' />
                        <View style={{
                            position: "absolute",
                            paddingLeft: wp(41),
                            paddingTop: hp(2.5),
                        }}>
                            <Text style={{
                                fontFamily: "circular-book",
                                color: "black",
                                fontSize: 20,
                            }}>
                                5.5
                            </Text>
                            <Text style={{
                                fontFamily: "circular-book",
                                color: "black",
                                fontSize: 10,
                            }}>
                                Your
                            </Text>
                            <Text style={{
                                fontFamily: "circular-book",
                                color: "black",
                                fontSize: 10,
                            }}>
                                Score
                            </Text>
                        </View>
                        <Pie
                            radius={50}
                            innerRadius={40}
                            series={[75]}
                            colors={['#b19cd9']}
                            backgroundColor='#ddd' />
                        <View style={{
                            position: "absolute",
                            paddingLeft: wp(73.2),
                            paddingTop: hp(2.5),
                        }}>
                            <Text style={{
                                fontFamily: "circular-book",
                                color: "black",
                                fontSize: 20,
                            }}>
                                7.0
                            </Text>
                            <Text style={{
                                fontFamily: "circular-book",
                                color: "black",
                                fontSize: 10,
                            }}>
                                Highest
                            </Text>
                            <Text style={{
                                fontFamily: "circular-book",
                                color: "black",
                                fontSize: 10,
                            }}>
                                Score
                            </Text>
                        </View>
                    </View>

                    {/* PieChart Completed */}
                    {/* Recent Courses */}
                    
                    <View>
                        <Text style={{
                            fontFamily: "circular-medium",
                            fontSize: 20,
                            paddingBottom: hp(3),
                            color: "black",
                        }}>
                            Recent Courses
                        </Text>
                       
                        
                    </View>
                    <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{
                            // backgroundColor: "yellow",
                            // flex: 1,
                            flexWrap: "wrap",
                            flexDirection: "row",
                        }}>
                            <RecentCourse name={'The Calculus by Thomas Finny'} image={require('../../assets/ex2.jpg')}/>
                            <RecentCourse name={'Comprehensive English'} image={require('../../assets/ex3.jpg')}/>
                            <RecentCourse name={'Mathematics by ML Khanna'} image={require('../../assets/ex5.jpg')}/>
                            <RecentCourse name={'Ashtanga Yoga'} image={require('../../assets/ex4.jpg')}/>
                            
                        </ScrollView>
                        
                </View>
            </View>
        )
    }
}

export default Dashboard;