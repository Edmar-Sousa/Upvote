import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import firebaseApp from '../firebase'


export const AuthenticateUserWithGoogle = () => {
    const auth = getAuth(firebaseApp)
    const provider = new GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/userinfo.profile')

    return signInWithPopup(auth, provider)
        .then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken
            const user  = result.user

            const userName = user.displayName
            const photoURL = user.photoURL
            const uid      = user.uid

            return { token, userName, photoURL, uid }
        })
        
        .catch(errorAuth => {
            const errorCode    = errorAuth.code
            const errorMessage = errorAuth.message

            return { errorCode, errorMessage }
        })
}
