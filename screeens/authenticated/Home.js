import React, {useState, useEffect, useRef} from 'react';
import { StatusBar, View, Text, Image, ScrollView, TouchableOpacity, Switch } from 'react-native';
//firebase
import { database, authentication } from '../../config/firebase';
import { onSnapshot, query, collection, where, orderBy, getDocs, updateDoc, doc } from 'firebase/firestore';
//moment
import moment from 'moment/moment';
import { Swipeable } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
//import loading
import Beat from '../animations/Beat';

const Home = () => {
  const [user, setUser] = useState([]);
  let weeksPregnant = null;
  const [lastPeriod, setLastPeriod] = useState("")
  const [userID, setUserID] = useState("")

  const [loading, setLoading] = useState(false);
  useEffect(()=>{
   setLoading(true);
   setTimeout(()=>{
     setLoading(false);
   },1600)
  },[])

  const fetcheUser = async() => {
    //let num = "+639508725911" //authentication.currentUser.phoneNumber;
    let num = authentication.currentUser.phoneNumber;
    let userData = [];  
    try{
      const querySnapshot = await getDocs(query(collection(database, "userData"),where("userNumber","==",num)));
      querySnapshot.forEach((doc)=>{
        setLastPeriod(doc.data().lastPeriod);
        setUserID(doc.id)
          userData.push({
            id:doc.id,
            lastPeriod:doc.data().lastPeriod,
            userFname:doc.data().userFname,
            userMname:doc.data().userMname,
            userLname:doc.data().userLname,
            userSuffix:doc.data().userSuffix,
            userSex:doc.data().userSex,
            userCivilStatus:doc.data().userCivilStatus,
            userBloodType:doc.data().userBloodType,
            userReligion:doc.data().userReligion,
            userNumber:doc.data().userNumber,
            userDob:doc.data().userDob,
            userAge:doc.data().userAge,
            userNationality:doc.data().userNationality,
            userOccupation:doc.data().userOccupation,
            userPurok:doc.data().userPurok,
            userBarangay:doc.data().userBarangay,
            userTown:doc.data().userTown,
            userProvince:doc.data().userProvince,
            userPlaceOfBirth:doc.data().userPlaceOfBirth,
            //family details
            userFathersName:doc.data().userFathersName,
            userMothersName:doc.data().userMothersName,
            userHusbandsName:doc.data().userHusbandsName,
            userHusbandsOccuupation:doc.data().userHusbandsOccuupation,
            userDateOfMarriage:doc.data().userDateOfMarriage,
            userPlaceOfMarriage:doc.data().userPlaceOfMarriage,
            userHusbandsNumber:doc.data().userHusbandsNumber,
            userCompleteAddress:doc.data().userCompleteAddress,
            userEmployedBy:doc.data().userEmployedBy,
            userSalary:doc.data().userSalary,
            userAddressOfEmployer:doc.data().userAddressOfEmployer,
            userNameOfBarangayCaptain:doc.data().userNameOfBarangayCaptain,
            //user pregnancy history
              //child1
            userChild1:doc.data().userChild1,
            userChildDateOfDelivery1:doc.data().userChildDateOfDelivery1,
            userChildTypeOfDelivery1:doc.data().userChildTypeOfDelivery1,
            userChildBirthOutcome1:doc.data().userChildBirthOutcome1,
            userChildNumberOfChildDelivered1:doc.data().userChildNumberOfChildDelivered1,
            userChildComplication1:doc.data().userChildComplication1,
              //child2
            userChild2:doc.data().userChild2,
            userChildDateOfDelivery2:doc.data().userChildDateOfDelivery2,
            userChildTypeOfDelivery2:doc.data().userChildTypeOfDelivery2,
            userChildBirthOutcome2:doc.data().userChildBirthOutcome2,
            userChildNumberOfChildDelivered2:doc.data().userChildNumberOfChildDelivered2,
            userChildComplication2:doc.data().userChildComplication2,
            //child3
            userChild3:doc.data().userChild3,
            userChildDateOfDelivery3:doc.data().userChildDateOfDelivery3,
            userChildTypeOfDelivery3:doc.data().userChildTypeOfDelivery3,
            userChildBirthOutcome3:doc.data().userChildBirthOutcome3,
            userChildNumberOfChildDelivered3:doc.data().userChildDateOfDelivery3,
            userChildComplication3:doc.data().userChildComplication3,
            //child4
            userChild4:doc.data().userChild4,
            userChildDateOfDelivery4:doc.data().userChildDateOfDelivery4,
            userChildTypeOfDelivery4:doc.data().userChildTypeOfDelivery4,
            userChildBirthOutcome4:doc.data().userChildBirthOutcome4,
            userChildNumberOfChildDelivered4:doc.data().userChildNumberOfChildDelivered4,
            userChildComplication4 :doc.data().userChildComplication4,    
            //child5
            userChild5:doc.data().userChild5,
            userChildDateOfDelivery5:doc.data().userChildDateOfDelivery5,
            userChildTypeOfDelivery5:doc.data().userChildTypeOfDelivery5,
            userChildBirthOutcome5:doc.data().userChildBirthOutcome5,
            userChildNumberOfChildDelivered5:doc.data().userChildNumberOfChildDelivered5,
            userChildComplication5:doc.data().userChildComplication5,
            //child6
            userChild6:doc.data().userChild6,
            userChildDateOfDelivery6:doc.data().userChildDateOfDelivery6,
            userChildTypeOfDelivery6:doc.data().userChildTypeOfDelivery6,
            userChildBirthOutcome6:doc.data().userChildBirthOutcome6,
            userChildNumberOfChildDelivered6:doc.data().userChildNumberOfChildDelivered6,
            userChildComplication6:doc.data().userChildComplication6,
            //child7
            userChild7:doc.data().userChild7,
            userChildDateOfDelivery7:doc.data().userChildDateOfDelivery7,
            userChildTypeOfDelivery7:doc.data().userChildTypeOfDelivery7,
            userChildBirthOutcome7:doc.data().userChildBirthOutcome7,
            userChildNumberOfChildDelivered7:doc.data().userChildNumberOfChildDelivered7,
            userChildComplication7:doc.data().userChildComplication7,
            //child8
            userChild8:doc.data().userChild8,
            userChildDateOfDelivery8:doc.data().userChildDateOfDelivery8,
            userChildTypeOfDelivery8:doc.data().userChildTypeOfDelivery8,
            userChildBirthOutcome8:doc.data().userChildBirthOutcome8,
            userChildNumberOfChildDelivered8:doc.data().userChildNumberOfChildDelivered8,
            userChildComplication8:doc.data().userChildComplication8,
            //child9
            userChild9:doc.data().userChild9,
            userChildDateOfDelivery9:doc.data().userChildDateOfDelivery9,
            userChildTypeOfDelivery9:doc.data().userChildTypeOfDelivery9,
            userChildBirthOutcome9:doc.data().userChildBirthOutcome9,
            userChildNumberOfChildDelivered9:doc.data().userChildNumberOfChildDelivered9,
            userChildComplication9:doc.data().userChildComplication9,
            //child10
            userChild10:doc.data().userChild10,
            userChildDateOfDelivery10:doc.data().userChildDateOfDelivery10,
            userChildTypeOfDelivery10:doc.data().userChildTypeOfDelivery10,
            userChildBirthOutcome10:doc.data().userChildBirthOutcome10,
            userChildNumberOfChildDelivered10:doc.data().userChildNumberOfChildDelivered10,
            userChildComplication10:doc.data().userChildComplication10,
            //user other health conditions 
            userTBPersonal:doc.data().userTBPersonal,
            userTBFamily:doc.data().userTBFamily,
            userHeartDiseasesPersonal:doc.data().userHeartDiseasesPersonal,
            userHeartDiseasesFamily:doc.data().userHeartDiseasesFamily,
            userDiabetesPersonal:doc.data().userDiabetesPersonal,
            userDiabetesFamily:doc.data().userDiabetesFamily,
            userHypertensionPersonal:doc.data().userHypertensionPersonal,
            userHypertensionFamily:doc.data().userHypertensionFamily,
            userBronchialAsthmaPersonal:doc.data().userBronchialAsthmaPersonal,
            userBronchialAsthmaFamily:doc.data().userBronchialAsthmaFamily,
            userUTIPersonal:doc.data().userUTIPersonal,
            userUTIFamily:doc.data().userUTIFamily,
            userParasitismPersonal:doc.data().userParasitismPersonal,
            userParasitismFamily:doc.data().userParasitismFamily,
            userGoiterPersonal:doc.data().userGoiterPersonal,
            userGoiterFamily:doc.data().userGoiterFamily,
            userAnemiaPersonal:doc.data().userAnemiaPersonal,
            userAnemiaFamily:doc.data().userAnemiaFamily,
            userGenitalTrackInfection:doc.data().userGenitalTrackInfection,
            userOtherInfectiousDiseases:doc.data().userOtherInfectiousDiseases,
            userHighRiskBehavior:doc.data().userHighRiskBehavior,
            dateCreated: doc.data().dateCreated,
            status:doc.data().status,
            userLevel:doc.data().userLevel,
            userPic:doc.data().userPic
          })
      })
    }catch(e){
      console.log(e)
    }
    setUser(userData)
  }

  useEffect(()=>{
    fetcheUser()
  },[])

  let formattedNow = moment(new Date()).format("YYYY/MM/DD");
  let difference = moment(formattedNow,"YYYY/MM/DD").diff(moment(lastPeriod,'YYYY/MM/DD'),"weeks");

  if(difference>42){
    try{
      updateDoc(doc(database, "userData",userID),{
        lastPeriod:""
      })
    }catch(e){
      alert(e)
    }
  }

  let trimester = "";
  if(difference<14){
    trimester = "First Trimester";
  }
  if(difference>13&&difference<28){
    trimester = "Second Trimester";
  }
  if(difference>27){
    trimester = "Third Trimester"
  }

 let EDD = moment(new Date()).add(280,"days").format("MMMM DD, YYYY")
 let daysDiff = moment(formattedNow,"YYYY/MM/DD").diff(moment(lastPeriod,'YYYY/MM/DD'),"days");
 let EDC = moment(new Date()).add(14,"days").format("MMMM DD, YYYY")
 let daysLeft = 280-daysDiff;

 const [isDays, setIsDays] = useState(false);
 const [page, setPage] = useState(1);

 useEffect(()=>{
  if(page<1){
    setPage(1)
  }
  if(page>4){
    setPage(4)
  }
 },[page])

 const [isEnabled, setIsEnabled] = useState(false);
 const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      {
        loading===true?
        <Beat/>
        :
        <View style={{width:'100%',height:'100%',alignItems:'flex-start',justifyContent:'flex-start',backgroundColor:'white'}}>
        {
          difference===0&&
          <Image source={require("../../assets/weeks/week1.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===1&&
          <Image source={require("../../assets/weeks/week1.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===2&&
          <Image source={require("../../assets/weeks/week2.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===3&&
          <Image source={require("../../assets/weeks/week3.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===4&&
          <Image source={require("../../assets/weeks/week4.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===5&&
          <Image source={require("../../assets/weeks/week5.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===6&&
          <Image source={require("../../assets/weeks/week6.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===7&&
          <Image source={require("../../assets/weeks/week7.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===8&&
          <Image source={require("../../assets/weeks/week8.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===9&&
          <Image source={require("../../assets/weeks/week9.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===10&&
          <Image source={require("../../assets/weeks/week10.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===11&&
          <Image source={require("../../assets/weeks/week11.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===12&&
          <Image source={require("../../assets/weeks/week12.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===13&&
          <Image source={require("../../assets/weeks/week13.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===14&&
          <Image source={require("../../assets/weeks/week14.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===15&&
          <Image source={require("../../assets/weeks/week15.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===16&&
          <Image source={require("../../assets/weeks/week16.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===17&&
          <Image source={require("../../assets/weeks/week17.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===18&&
          <Image source={require("../../assets/weeks/week18.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===19&&
          <Image source={require("../../assets/weeks/week19.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===20&&
          <Image source={require("../../assets/weeks/week20.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===21&&
          <Image source={require("../../assets/weeks/week21.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===22&&
          <Image source={require("../../assets/weeks/week22.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===23&&
          <Image source={require("../../assets/weeks/week23.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===24&&
          <Image source={require("../../assets/weeks/week24.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===25&&
          <Image source={require("../../assets/weeks/week25.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===26&&
          <Image source={require("../../assets/weeks/week26.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===27&&
          <Image source={require("../../assets/weeks/week27.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===28&&
          <Image source={require("../../assets/weeks/week28.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===29&&
          <Image source={require("../../assets/weeks/week29.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===30&&
          <Image source={require("../../assets/weeks/week30.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===31&&
          <Image source={require("../../assets/weeks/week31.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===32&&
          <Image source={require("../../assets/weeks/week32.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===33&&
          <Image source={require("../../assets/weeks/week33.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===34&&
          <Image source={require("../../assets/weeks/week34.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===35&&
          <Image source={require("../../assets/weeks/week35.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===36&&
          <Image source={require("../../assets/weeks/week36.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===37&&
          <Image source={require("../../assets/weeks/week37.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===38&&
          <Image source={require("../../assets/weeks/week38.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===39&&
          <Image source={require("../../assets/weeks/week39.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===40&&
          <Image source={require("../../assets/weeks/week40.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===41&&
          <Image source={require("../../assets/weeks/week41.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===42&&
          <Image source={require("../../assets/weeks/week41.jpg")} style={{width:'100%',height:'50%'}}/>
        }
              {
          difference===43&&
          <Image source={require("../../assets/weeks/week41.jpg")} style={{width:'100%',height:'50%'}}/>
        }
        <View style={{width:'98%',height:'20%',backgroundColor:'ghostwhite',alignSelf:'center',marginTop:'1%',flexDirection:'row'}}>
          <View style={{width:'20%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly'}}>
            {
              isEnabled===true?
              <>
                <Text style={{color:'black',fontSize:60,fontWeight:700,color:'rgb(0,0,90)'}}>{difference}</Text>
                <Text style={{textAlign:'center',fontSize:12,fontWeight:700,color:'rgb(0,0,70)'}}>weeks pregnant</Text>
              </>
              :
              <>
                <Text style={{color:'black',fontSize:50,fontWeight:700,color:'rgb(0,0,90)'}}>{daysDiff}</Text>
                <Text style={{textAlign:'center',fontSize:12,fontWeight:700,color:'rgb(0,0,70)'}}>days pregnant</Text>
              </>
            }
          </View>
          <View style={{width:'80%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
            <View style={{width:'80%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
              <View style={{width:'100%',height:'30%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:18,fontWeight:600,}}>{trimester}</Text>
              </View>
              {
                isEnabled===true?
                <View style={{width:'100%',height:'70%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{width:'48%',height:'92%',display:'flex',backgroundColor:'rgb(0,0,90)',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
                  <Text style={{color:'white',fontSize:24,fontWeight:700}}>EDD</Text>
                    <Text style={{fontSize:10,color:'black',fontWeight:700,color:'white'}}>{EDD}</Text>
                </View>
                <View style={{width:'48%',height:'92%',display:'flex',backgroundColor:'rgb(0,0,90)',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
                  <Text style={{color:'white',fontSize:24,fontWeight:700}}>EDC</Text>
                  <Text style={{fontSize:10,color:'black',fontWeight:700,color:'white'}}>{EDC}</Text>
                </View>
              </View>
              :
              <View style={{width:'100%',height:'70%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{width:'48%',height:'92%',display:'flex',backgroundColor:'rgb(0,0,90)',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
                  <Text style={{color:'white',fontSize:24,fontWeight:700}}>{daysLeft}</Text>
                  <Text style={{fontSize:10,color:'black',fontWeight:700,color:'white'}}> DAYS LEFT</Text>
                </View>
                <View style={{width:'48%',height:'92%',display:'flex',backgroundColor:'rgb(0,0,90)',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
                  <Text style={{color:'white',fontSize:24,fontWeight:700}}>{difference} days</Text>
                  <Text style={{fontSize:10,color:'black',fontWeight:700,color:'white'}}> Gestational Age</Text>
                </View>
              </View>
              }
            </View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? 'rgb(0,0,90)' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={{width:'100%',height:'30%',backgroundColor:'grey',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <TouchableOpacity onPress={()=> setPage(page-1)} style={{width:'10%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
            <FontAwesomeIcon icon={faAngleLeft} size={20} color="grey" />
          </TouchableOpacity>
            <> 
              {
                difference===0&&
                <>
                  {
                    page===1&&
                    <View style={{width:'90%',height:'100%',backgroundColor:'white'}}>
  
                    </View>
                  }
                  {
                    page===2&&
                    <View style={{width:'90%',height:'100%',backgroundColor:'white'}}>
  
                    </View>
                  }
                  {
                    page===3&&
                    <View style={{width:'90%',height:'100%',backgroundColor:'white'}}>
  
                    </View>
                  }
                  {
                    page===4&&
                    <View style={{width:'90%',height:'100%',backgroundColor:'white'}}>
  
                    </View>
                  }
                </>
              }
              {
                difference===6&&
                <>
                  {
                    page===1&&
                    <View style={{width:'90%',height:'100%',backgroundColor:'white'}}>
                      
                    </View>
                  }
                  {
                    page===2&&
                    <View style={{width:'90%',height:'100%',backgroundColor:'white'}}>
  
                    </View>
                  }
                  {
                    page===3&&
                    <View style={{width:'90%',height:'100%',backgroundColor:'white'}}>
  
                    </View>
                  }
                  {
                    page===4&&
                    <View style={{width:'90%',height:'100%',backgroundColor:'white'}}>
  
                    </View>
                  }
                </>
              }
            </>
          <TouchableOpacity onPress={()=> setPage(page+1)} style={{width:'10%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
            <FontAwesomeIcon icon={faAngleRight} size={20} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
      }
    </>
  )
}

export default Home