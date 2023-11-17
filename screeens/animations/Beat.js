import React, { useRef, useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Lotties
import AnimatedLottieView from 'lottie-react-native';
import { lotties } from '../../style';

const Beat = () => {

    const animationRef = useRef();
    useEffect(() => {
        animationRef.current?.play();
    }, []);

  return (
    <View style={style.container}>
        <AnimatedLottieView ref={animationRef} style={{width:400,height:400,alignSelf:'center'}} source={lotties.beat}  autoPlay loop/>
    </View>
  )
}

export default Beat

const style = StyleSheet.create({
    container:{
        width:"100%",
        height:'100%',
        justifyContent:'center',
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor:'white',
        zIndex:1,
    }
})