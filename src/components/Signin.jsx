import GoogleButton from 'react-google-button'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { auth } from '../firebase'

const Signin = () => {
  const googleSignin = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  return (
    <div className="flex justify-center">
      <GoogleButton onClick={googleSignin} />
    </div>
  )
}

export default Signin
