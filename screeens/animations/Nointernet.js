import React, { useRef, useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Lotties
import AnimatedLottieView from 'lottie-react-native';
import { lotties } from '../../style';

const Nointernet = () => {

    const animationRef = useRef();
    useEffect(() => {
        animationRef.current?.play();
    }, []);

  return (
    <View style={style.container}>
        <AnimatedLottieView ref={animationRef} style={{width:300,height:300,alignSelf:'center'}} source={lotties.NoInternet1}  autoPlay loop/>
        <Text style={{fontSize:35,color:'red',fontWeight:'700',}}>Resolving Network issue</Text>
        <Text style={{fontSize:30,color:'red',fontWeight:'700',}}>Please Wait</Text>
    </View>
  )
}

export default Nointernet

const style = StyleSheet.create({
    container:{
        width:"100%",
        height:'100%',
        justifyContent:'center',
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor:'rgba(0,0,0,0)',
        zIndex:1,
    }
})