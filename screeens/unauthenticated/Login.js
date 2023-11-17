import React, {useState, useEffect, useRef} from 'react';
import { StatusBar, View,Text, Image, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
//import firebase
import { authentication } from '../../config/firebase';
import { database } from '../../config/firebase';
import { getDocs, query, collection, docs, onSnapshot, where,doc } from 'firebase/firestore';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { app } from '../../config/firebase';
//
import Searching from '../animations/Searching';
import UserFound from '../animations/Userfound';
import Notfound from '../animations/Notfound';
import LoggingIn from '../animations/LoggingIn';
import { lotties } from '../../style';
import AnimatedLottieView from 'lottie-react-native';
import { KeyboardAvoidingView } from 'react-native';

const Login = () => {


  const animationRef = useRef(); // The <> is for TypeScript, but can be removed for JavaScript
  useEffect(() => {
      animationRef.current?.play();
  }, []);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //
  const recaptchaVerifier = useRef(null);
  const [phoneNumber,setPhoneNumber] = useState('');
  const [verificationId,setVerificationID] = useState('');
  const [verificationCode,setVerificationCode] = useState('');
  const firebaseConfig = app ? app.options : undefined;
  const [info,setInfo] = useState("");
  const attemptInvisibleVerification = false;
  const [exists, setExists] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); 
  const [docId, setDocId] = useState("");
  const [searching, setSearching] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [status, setStatus] = useState("");

  
  const handleSendVerificationCode = async () => {
    try{
        const phoneProvider = new PhoneAuthProvider(authentication); // initialize the phone provider.
        const verificationId = await phoneProvider.verifyPhoneNumber(
            phoneNumber,
            recaptchaVerifier.current
        ); // get the verification id
        setVerificationID(verificationId)
         // set the verification id
        setInfo('Success : Verification code has been sent to your phone'); // If Ok, show message.
   
    }catch(error){
        setInfo(`Error : Failed to verify phone number`); // show the error
    }
    };

    const handleVerifyVerificationCode = async () => {
        try{
            const credential = PhoneAuthProvider.credential(verificationId,verificationCode); // get the credential
            await signInWithCredential(authentication,credential); // verify the credential
            setInfo('Success: Phone authentication successful'); // if OK, set the message
        }catch(error){
            setInfo(`Authentication error`); // show the error.
        }
    }

    const handleNumberExists = async () => {
        let userData = [];
        const queryCollection = await getDocs(query(collection(database,"userData"),where("userNumber","==",phoneNumber)))
        queryCollection.forEach((doc)=>{
            userData.push(doc.data)
            setDocId(doc.id)
            setStatus(doc.data().status)
        })

        setSearching(true)
        setTimeout(()=>{
            setSearching(false)
        },2000)
        if(docId!==""){
            setExists(true)
            handleSendVerificationCode()
                setInfo("Number found in Daet RHU III Birthing Center database, OTP sent.")
                if(status==="pending"){
                    updateDoc(doc(database, "userData",docId),{
                        status:"approved"  
                    })
                }
        }else{
            setInfo("This number is not registered in Det RHU III Birthing Center");
        }

    }
    console.log("ID: "+docId)

  return (
    <>
    {
        searching===true&&
        <Searching/>
    }
    {
      isSignedIn?
      <LoggingIn/>
      :
         <View style={style.container}>
        <View style={{width:'100%',height:'65%'}}>
        </View>
        <View style={{width:'100%',height:60,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',}}>
                <Image source={require("../../assets/rhulogo.jpg")} style={{width:60,height:60,borderRadius:60}}/>
                <Text style={{fontSize:18,fontWeight:600,color:'grey'}}>Daet RHU III Birthing Center</Text>
            </View>
        <View>
            <Image source={require("../../assets/MCare.png")} style={{width:300,height:300,borderRadius:60}}/>
        </View>
        <View style={{alignSelf: 'center', margin: '1%'}}>
          <Text style={{fontSize: 28, color: 'skyblue', fontWeight: 800,textAlign:'center'}}>Login with your mobile number</Text>
        </View>
        <View style={{width:'100%',height:'90%'}}>
          <View>
            <FirebaseRecaptchaVerifierModal 
                ref={recaptchaVerifier}  
                firebaseConfig={firebaseConfig}
            />

            {
                info && <Text style={styles.text}>{info}</Text>
            }

            <KeyboardAvoidingView>
                { // show the phone number input field when verification id is not set.
                    !verificationId && (
                        <View style={{width:'92%',height:150,alignSelf:'center',backgroundColor:'navy',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                                <View style={{width:'100%',height:70,alignItems:'center',flexDirection:'row',backgroundColor:'navy',justifyContent:'space-evenly'}}>
                                    <TextInput
                                        placeholder='+639123456789'
                                        autoFocus
                                        autoCompleteType='tel'
                                        keyboardType='phone-pad'
                                        textContentType='telephoneNumber'
                                        onChangeText={ (phoneNumber) => setPhoneNumber(phoneNumber)}
                                        style={{color:'black',backgroundColor:'ghostwhite',width:'80%',height:50,fontSize:14}}
                                    />
                                </View>

                                <TouchableOpacity>
                                    <Button 
                                        onPress={ () => handleNumberExists()}
                                        title= "Send Verification Code"
                                        disabled={!phoneNumber||phoneNumber.length<13}
                                        style={{color:'white',backgroundColor:'navy',width:'80%',height:60}}
                                    />
                                </TouchableOpacity>
                        </View>
                    )
                    
                }
            </KeyboardAvoidingView>

            <KeyboardAvoidingView>
                { // if verification id exists show the confirm code input field.
                    verificationId && (
                        <View style={{width:'92%',height:150,alignSelf:'center',backgroundColor:'navy',borderRadius:10,alignItems:'center',justifyContent:'center'}}>

                            <Text style={{color:'white',}}>Enter the verification code</Text>

                            <TextInput
                                editable={!!verificationId}
                                placeholder= "* * * * * *"
                                onChangeText={setVerificationCode}
                                style={{color:'black',backgroundColor:'ghostwhite',width:'80%',height:50,fontSize:14}}
                            />

                            <TouchableOpacity>
                            <Button
                                title= "Confirm Verification Code"
                                disabled={!verificationCode||verificationCode<5}
                                onPress = {() => handleVerifyVerificationCode()}
                                style={{color:'white',backgroundColor:'navy',width:'100%',height:60}}
                            />
                            </TouchableOpacity>
                        </View>
                    )
                }
            </KeyboardAvoidingView>
            {attemptInvisibleVerification && <FirebaseRecaptchaBanner/>}
            </View>
        </View>
      </View>
    }
    </>
  )
}

export default Login

const style = StyleSheet.create({
  text:{
      color: "black",
      textAlign:'center',
      margin:'5%',
      fontSize:13,
      fontWeight:"bold"
  },
  container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  }
  })

  const styles = StyleSheet.create({
    text:{
        color: "black",
        textAlign:'center',
        margin:'5%',
        fontSize:13,
        fontWeight:"bold"
    },
    container:{
        width:'100%',
        height:'100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
    })