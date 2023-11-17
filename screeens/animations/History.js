import React, { useRef, useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Lotties
import AnimatedLottieView from 'lottie-react-native';
import { lotties } from '../../style';

const History = () => {


  return (
    <View style={style.container}>
        <AnimatedLottieView   style={{width:100,height:100,alignSelf:'center'}} source={lotties.Calendar2}/>
    </View>
  )
}

export default History

const style = StyleSheet.create({
    container:{
        width:70,
        height:70,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor:'transparent',
        zIndex:1,
    }
})