import { initializeApp, FirebaseOptions  } from 'firebase/app'

const firebaseApp : FirebaseOptions = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
}

export default initializeApp(firebaseApp)
