import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView } from 'react-native';

const Notification = () => {

    const [active, setActive] = useState("");

  return (
    <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
        <View style={{width:'100%',height:'10%',alignItems:'center',justifyContent:"space-evenly"}}>

        </View>
        <View style={{width:'100%',height:'90%',alignItems:'center',justifyContent:"space-evenly"}}>

        </View>
    </View>
  )
}

export default Notification