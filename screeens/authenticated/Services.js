import { faPlugCirclePlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, {useState, useEffect, useRef} from 'react';
import { StatusBar, View, Text, TouchableOpacity } from 'react-native';
//Date Oicker
import DatePicker from 'react-native-modern-datepicker';

const Services = () => {

  const [active, setActive] = useState("view");
  const [dateSelected, setDateSelected] = useState("");
  const [showPrev, setShowPrev] = useState(false);

  return (
    <>{
      showPrev===true&&
      <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>

      </View>
    }
      <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
      <View style={{width:'100%',height:'8%',flexDirection:'row',backgroundColor:'ghostwhite',alignItems:'center',alignItems:'center',justifyContent:'space-around'}}>
        <TouchableOpacity onPress={()=> setActive("view")} style={{width:'44%',height:'100%',alignItems:'center',justifyContent:'center',borderBottomWidth:active==="view"?5:0,borderBottomColor:active==="view"?"rgb(00,0,50)":"transparent"}}>
          <Text>View Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setActive("add")} style={{width:'44%',height:'100%',alignItems:'center',justifyContent:'center',borderBottomWidth:active==="add"?5:0,borderBottomColor:active==="add"?"rgb(00,0,50)":"transparent"}}>
          <Text>Make an Appointment</Text>
        </TouchableOpacity>
      </View>
      <View style={{width:'100%',height:'92%',backgroundColor:'white'}}>
        {
          active==="view"&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',backgroundColor:'white'}}> 
            <View style={{width:'90%',height:'48%',backgroundColor:'lightgrey'}}>

            </View>
            <View style={{width:'90%',height:'48%',backgroundColor:'skyblue'}}>

            </View>
          </View>
        }
        {
          active==="add"&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',backgroundColor:'white'}}> 
            <View style={{width:'90%',height:'50%',backgroundColor:'white'}}>
              <Text style={{margin:'2%',fontSize:16,fontWeight:600}}>1. Select Date of Appointment</Text>
              <DatePicker
                options={{
                  backgroundColor: '#090C08',
                  textHeaderColor: '#FFA25B',
                  textDefaultColor: '#F6E7C1',
                  selectedTextColor: '#fff',
                  mainColor: '#F4722B',
                  textSecondaryColor: '#D6C7A1',
                  borderColor: 'rgba(122, 146, 165, 0.1)',
                }}
                current="2020-07-13"
                selected="2020-07-23"
                onDateChange={(date)=> setDateSelected(date)}
                mode="calendar"
                minuteInterval={30}
                style={{ borderRadius: 10,zIndex:10,}}
              />
            </View>
            <TouchableOpacity onPress={()=> alert("submitted")} style={{width:'90%',height:'10%',backgroundColor:'rgb(0,0,50)'}}>
              <View style={{width:'90%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <FontAwesomeIcon icon={faPlusCircle} size={30} color='white'/>
                <Text style={{color:'white',fontSize:16,fontWeight:500}}>submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        }
      </View>
    </View>
    </>
  )
}

export default Services