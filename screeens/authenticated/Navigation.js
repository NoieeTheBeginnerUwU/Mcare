import React, {useState, useEffect, useRef} from 'react';
import { StatusBar, TouchableOpacity, View, Text } from 'react-native';
//Navigation Container
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Authenticated Navigation
import Home from './Home';
import Services from './Services';
import Tools from './Tools';
import Messages from './Messages';
import Profile from './Profile';
//import 
import Patienthistory from './Patienthistory';
import EDD from './EDD';
import BMI from './BMI';
import Milestone from './Milestone';
import Notification from './Notification';
//
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAccessibleIcon, faDashcube } from '@fortawesome/free-brands-svg-icons';
import { faBoxes, faDashboard, faHome, faPlusCircle, faToolbox, faTools } from '@fortawesome/free-solid-svg-icons';
import { faMessage, faUserCircle } from '@fortawesome/free-regular-svg-icons';

const Stack = createStackNavigator();

const Navigation = () => {

    const nav = useNavigation();
    const [active, setActive] = useState("Home");

  return (
    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
        <StatusBar/>
        <View style={{width:'100%',height:'94%',backgroundColor:'red'}}>
            <Stack.Navigator screenOptions={{headerShown:true}}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Services' component={Services}/>
                <Stack.Screen name='Tools' component={Tools}/>
                <Stack.Screen name='Messages' component={Messages}/>
                <Stack.Screen name='Profile' component={Profile}/>
                <Stack.Screen name='Patient History' component={Patienthistory}/>
                <Stack.Screen name='EDD Calculator' component={EDD}/>
                <Stack.Screen name='BMI Calculator' component={BMI}/>
                <Stack.Screen name='Milestone' component={Milestone}/>
                <Stack.Screen name='Notification' component={Notification}/>
            </Stack.Navigator>
        </View>
        <View style={{width:'96%',height:'6%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'space-around',borderRadius:25,marginBottom:10}}>
            <TouchableOpacity onPress={()=> [nav.navigate("Home"), setActive("Home")]} style={{backgroundColor:active==="Home"?"rgb(0,0,60)":'transparent',height:'70%',borderRadius:50,width:'18%',alignItems:'center',justifyContent:'center'}}>
                <FontAwesomeIcon icon={faHome} size={24} color={active==="Home"?"white":'black'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> [nav.navigate("Messages"), setActive("Messages")]}  style={{backgroundColor:active==="Messages"?"rgb(0,0,60)":'transparent',height:'70%',borderRadius:50,width:'18%',alignItems:'center',justifyContent:'center'}}>
                <FontAwesomeIcon icon={faMessage} size={24} color={active==="Messages"?"white":'black'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> [nav.navigate("Services"), setActive("Services")]}  style={{backgroundColor:active==="Services"?"rgb(0,0,60)":'transparent',height:'70%',borderRadius:50,width:'18%',alignItems:'center',justifyContent:'center'}}>
                <FontAwesomeIcon icon={faPlusCircle} size={24} color={active==="Services"?"white":'black'}/>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> [nav.navigate("Tools"), setActive("Tools")]}  style={{backgroundColor:active==="Tools"?"rgb(0,0,60)":'transparent',height:'70%',borderRadius:50,width:'18%',alignItems:'center',justifyContent:'center'}}>
                <FontAwesomeIcon icon={faToolbox} size={24} color={active==="Tools"?"white":'black'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> [nav.navigate("Profile"), setActive("Profile")]}  style={{backgroundColor:active==="Profile"?"rgb(0,0,60)":'transparent',height:'70%',borderRadius:50,width:'18%',alignItems:'center',justifyContent:'center'}}>
                <FontAwesomeIcon icon={faUserCircle} size={24} color={active==="Profile"?"white":'black'}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Navigation