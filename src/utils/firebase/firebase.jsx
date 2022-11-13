import { initializeApp } from 'firebase/app'

import { GoogleAuthProvider ,  getAuth , signInWithPopup} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyBEzhjFABnX0ZUjqkno3vsUvu3N4FJ2sxQ",
    authDomain: "ztm-ecommerce-80856.firebaseapp.com",
    projectId: "ztm-ecommerce-80856",
    storageBucket: "ztm-ecommerce-80856.appspot.com",
    messagingSenderId: "6899366161",
    appId: "1:6899366161:web:9f83300f60631e928cb4b0"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt:'select_account'
  })

  export const auth = getAuth()

  export const signInwithGooglePopUp =()=> signInWithPopup(auth, provider)