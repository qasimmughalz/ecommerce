import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider ,  getAuth , signInWithPopup} from 'firebase/auth'
import {setDoc , getDoc, getFirestore, doc} from 'firebase/firestore'


// ======== Firebase Ap Setup =============


const firebaseConfig = {
    apiKey: "AIzaSyBEzhjFABnX0ZUjqkno3vsUvu3N4FJ2sxQ",
    authDomain: "ztm-ecommerce-80856.firebaseapp.com",
    projectId: "ztm-ecommerce-80856",
    storageBucket: "ztm-ecommerce-80856.appspot.com",
    messagingSenderId: "6899366161",
    appId: "1:6899366161:web:9f83300f60631e928cb4b0"
  };

  const firebaseApp = initializeApp(firebaseConfig);


// ============== Google Auth Setup ==============

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt:'select_account'
  })
  export const auth = getAuth()
  export const signInwithGooglePopUp =()=> signInWithPopup(auth, provider)



//   ================= Firebase FireStore Setup ============= 

  export const db = getFirestore()
  export const CreateUserDocumentFromAuth = async (userauth)=>{
        const userDocument = doc(db, 'users', userauth.uid)
        const userSnapShot = await getDoc(userDocument) 

        if(!userSnapShot.exists()){
            const createdAt = new Date();
            const { displayName, email } = userauth

          try{
           await setDoc(userDocument , {
              displayName, 
              email,
              createdAt,
            })

          }catch(error){
             console.log('error in setting doc to user', error)
          }
        }

        return userDocument
  }
