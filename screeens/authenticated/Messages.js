import React, {useState, useEffect, useRef } from 'react';
import { StatusBar, View, Text, Image, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
//firebase
import { database, authentication } from '../../config/firebase';
import { onSnapshot, getDocs, updateDoc, addDoc, doc, query, collection, where, orderBy } from 'firebase/firestore';
import moment from 'moment';
//Loading
import Beat from '../animations/Beat';

const Messages = () => {

  //let num = "+639508725911" //authentication.currentUser.phoneNumber;
  let num = authentication.currentUser.phoneNumber;
  const [userID, setUserID] = useState("");
  const [pic, setPic] = useState("");
  const [nameOfUser, setNameOfUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("")
  const date = new Date();
  const [receiver, setReceiver] = useState("");
  const scrll = useRef();

  async function fetchUser(){
    const userData = [];
    const querySnapshot = await getDocs(query(collection(database, 'userData'),where("userNumber","==",num)));
    querySnapshot.forEach((doc)=>{
      setPic(doc.data().userPic)
      setNameOfUser(doc.data().userFname+ " " + doc.data().userMname+ " " +doc.data().userLname)
      setUserID(doc.id);
    });
    onSnapshot(query(collection(database, "messages"),orderBy("createdAt","asc")), (snapshot) => {
      snapshot.forEach((doc)=>{
        if(doc.data().receiverId===userID&&doc.data().status==="unread"){
          handleRead(doc.id)
          scrollToBottom
        }
      })
      setMessages(snapshot.docs)
    });

  }

  const handleRead = async(id) => {
    try {
        updateDoc(doc(database,"messages",id),{
          status:"read"
        }).then(console.log("updated"))
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }

 

  useEffect(()=>{
    fetchUser();
    console.log("UID: "+userID);
    console.log("Messages " + messages)
  },[])

 
  const refScrollView = useRef(null);

  const scrollToBottom = () => {
    refScrollView.current.scrollToEnd();
  };

  const sendMessage = async (message) => {
    if(message!==""){
      const messagesCollection = collection(database, "messages");
    let now = moment(date).format("YYYY/MM/DD hh:mm a");
    await addDoc(messagesCollection, {
      text: message,
      createdAt: now,
      senderId: userID,
      receiverId: receiver,
      status: "unread",
      readAt: null
    });
    await addDoc(collection(database, "onlineAppointments"),{
      dateMade:moment(new Date()).format("MMMM DD, YYYY hh:mm a"),
      name: nameOfUser,
      status:'pending',
      time: moment(new Date()).format("hh:mm aa"),
      uid: userID,
      purpose:"messaged you",
      read:false,
      appointmentDate:moment(new Date()).format("MMMM DD, YYYY hh:mm a")
    })
    await addDoc(collection(database, "log"),{
      dateMade:moment(new Date()).format("MMMM DD, YYYY hh:mm a"),
      timeMade: moment(new Date()).format("hh:mm aa"),
      uid: userID,
      activity:"messaged RHU Birthing Center",
      type:"message",
    })
    setMessage("");
    scrollToBottom
    }else{
      alert("Message cannot be blank")
    }
  };

  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },1500)
  },[])

  return (
    <>
      {
        loading===true?
        <Beat/>
        :
        <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
     <View style={{width:'100%',height:'8%',backgroundColor:'navy'}}>

     </View>
     <ScrollView style={{width:'100%',height:'84%'}} ref={refScrollView}>
      {
        messages.map((doc)=>(
          <>
            {
                     doc.data().receiverId===userID&&
                     <>
                     <View key={doc.data().id} style={{width:"50%",listStyleType:'none',marginLeft:'4%',color:'black',marginTop:20,marginBottom:40,flexDirection:'row',justifyContent:"flex-end",alignItems:"flex-end",backgroundColor:'transparent',}}>
                          <Image
                              style={{width:50,height:50,borderRadius:50}}
                              source={require('../../assets/logo2.png')}/>
                         <View style={{width:'100%',marginLeft:10,height:'100%'}}>
                           <Text style={{color:'black',fontSize:10,fontWeight:700,marginBottom:5,color:'gray',margin:0}}>DAET RHU III - Birthing Center ADMIN</Text>
                           <Text style={{width:'100%',padding:'4%',backgroundColor:'rgb(0,0,100)',borderRadius:10,fontSize:14,fontWeight:700,color:'white',textAlign:'center'}}>{doc.data().text}</Text>
                           <Text style={{color:'black',fontSize:10,marginBottom:10,color:'gray',margin:0}}>{doc.data().createdAt}</Text>
                         </View>
                     </View>
                     </>                    
                }
                {
                  doc.data().senderId===userID&&
                  <View key={doc.data().id} style={{width:"50%",marginLeft:'44%',listStyleType:'none',color:'black',margin:'.5%',marginTop:20,marginBottom:40,flexDirection:'row',justifyContent:"flex-start",alignItems:"flex-start",backgroundColor:'transparent',}}>
                      <View style={{width:'100%',marginLeft:10,height:'100%'}}>
                        <Text style={{color:'black',fontSize:12,fontWeight:700,marginBottom:5,marginLeft:'80%',color:'gray',margin:0}}>YOU</Text>
                        <Text style={{width:'100%',padding:"4%",backgroundColor:'rgb(0,0,100)',borderRadius:10,fontSize:14,fontWeight:700,color:'white',textAlign:'center',marginRight:'10%',alignItems:'center',justifyContent:'center'}}>{doc.data().text}</Text>
                        <Text style={{color:'black',fontSize:10,marginBottom:10,color:'gray',margin:0}}>{doc.data().createdAt}</Text>
                      </View>
                    </View>
                    }
                  </>
                  ))
                }
              </ScrollView>
                <View style={{width:'100%',height:'8%',backgroundColor:'rgb(0,0,60)',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                  <View style={{width:'78%',height:'80%',alignItems:'center',justifyContent:'center',backgroundColor:'white',alignSelf:'center',justifySelf:'center'}}>
                    <TextInput onChangeText={(text)=> setMessage(text)} value={message} placeholder='enter message here' style={{width:'90%',height:'90%',backgroundColor:'white',color:'black'}}/>
                  </View>
                  <TouchableOpacity onPress={()=> sendMessage(message)} style={{width:'18%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>Send</Text>
                  </TouchableOpacity>
                </View>
              </View>
      }
    </>
  )
}

export default Messages