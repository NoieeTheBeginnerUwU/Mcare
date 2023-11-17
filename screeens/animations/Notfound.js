import React, { useRef, useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Lotties
import AnimatedLottieView from 'lottie-react-native';
import { lotties } from '../../style';

const Notfound = () => {

    const animationRef = useRef();
    useEffect(() => {
        animationRef.current?.play();
    }, []);

  return (
    <View style={style.container}>
        <AnimatedLottieView ref={animationRef} style={{width:300,height:300,alignSelf:'center'}} source={lotties.Error404}  autoPlay/>
        <Text style={{fontSize:18,color:'orange',fontWeight:'700',textAlign:'center'}}>this phone number is not registered in the Birthing Center database</Text>
    </View>
  )
}

export default Notfound

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