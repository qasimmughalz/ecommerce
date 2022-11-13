import React from 'react'
import {signInwithGooglePopUp} from '../../../utils/firebase/firebase'

const SignIn = () => {

    const LogSignIn = async () =>{
        const response = await signInwithGooglePopUp()
        console.log(response)
    }

  return (
    <div>

        <h1>I'm in sign in</h1>
        <button onClick={LogSignIn}>Sign in with Google</button>
      
    </div>
  )
}

export default SignIn
