import React from 'react'
import {CreateUserDocumentFromAuth, signInwithGooglePopUp} from '../../../utils/firebase/firebase'

const SignIn = () => {

    const LogSignIn = async () =>{
        const {user} = await signInwithGooglePopUp()
        CreateUserDocumentFromAuth(user)
    }

  return (
    <div>
        <h1>I'm in sign in</h1>
        <button onClick={LogSignIn}>Sign in with Google</button>
    </div>
  )
}

export default SignIn
