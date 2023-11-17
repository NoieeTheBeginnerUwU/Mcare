import React, {useState, useEffect, useRef} from 'react'
import { database, authentication } from './firebase'
import { collection, onSnapshot, getDocs,query, where } from 'firebase/firestore'

const fetcheUser = async() => {
    let num = authentication.currentUser.phoneNumber;
    let userData = [];
    try{
      const querySnapshot = await getDocs(query(collection(database, "userData"),where("userNumber","==",num)));
      querySnapshot.forEach((doc)=>{
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
    return(userData)
  }

export default fetcheUser