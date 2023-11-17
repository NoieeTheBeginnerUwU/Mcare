import React, { useRef, useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Lotties
import AnimatedLottieView from 'lottie-react-native';
import { lotties } from '../../style';

const Scale = () => {


  return (
    <View style={style.container}>
        <AnimatedLottieView   style={{width:70,height:70,alignSelf:'center'}} source={lotties.scale}/>
    </View>
  )
}

export default Scale

const style = StyleSheet.create({
    container:{
        width:70,
        height:70,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor:'transparent',
        zIndex:1,
        marginTop:'-5%'
    }
})