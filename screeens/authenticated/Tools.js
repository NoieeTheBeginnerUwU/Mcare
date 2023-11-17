import React, {useState, useEffect, useRef} from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar, View, Text } from 'react-native';
//FOntawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
//lottie icon
import History from '../animations/History';
import Scale from '../animations/Scale';
import Fetchdata from '../animations/Fetchdata';
import Notification from '../animations/Notification';
//navigation
import { useNavigation } from '@react-navigation/native';

const Tools = () => {

  const nav = useNavigation();

  return (
    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',backgroundColor:'white'}}>
      <TouchableOpacity onPress={()=> nav.navigate("Patient History")} style={{width:'94%',height:'18%',backgroundColor:'rgb(0,0,60)',borderRadius:10}}>
        <View style={{width:'100%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
          <History/>
          <Text style={{fontSize:24,fontWeight:800,color:'white'}}>Patient History</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> nav.navigate("Notification")} style={{width:'94%',height:'18%',backgroundColor:'rgb(0,0,60)',borderRadius:10}}>
        <View style={{width:'100%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
          <Notification/>
          <Text style={{fontSize:24,fontWeight:800,color:'white'}}>Notifications</Text>   
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> nav.navigate("Milestone")} style={{width:'94%',height:'18%',backgroundColor:'rgb(0,0,60)',borderRadius:10}}>
        <View style={{width:'100%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
          <History/>
          <Text style={{fontSize:24,fontWeight:800,color:'white'}}>Milestones</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> nav.navigate("EDD Calculator")} style={{width:'94%',height:'18%',backgroundColor:'rgb(0,0,60)',borderRadius:10}}>
        <View style={{width:'100%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
          <History/>
          <Text style={{fontSize:24,fontWeight:800,color:'white'}}>EDD Calculator</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> nav.navigate("BMI Calculator")} style={{width:'94%',height:'18%',backgroundColor:'rgb(0,0,60)',borderRadius:10}}>
        <View style={{width:'100%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
          <History/>
          <Text style={{fontSize:24,fontWeight:800,color:'white'}}>BMI Calculator</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Tools