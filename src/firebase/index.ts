import { initializeApp, FirebaseOptions  } from 'firebase/app'

const firebaseApp : FirebaseOptions = {
    apiKey: "AIzaSyAqtLf-eHDjtV3sfeeQWdNdqNYrnqqoZ_4",
    authDomain: "vote-app-c436e.firebaseapp.com",
    databaseURL: "https://vote-app-c436e-default-rtdb.firebaseio.com",
    projectId: "vote-app-c436e",
    storageBucket: "vote-app-c436e.appspot.com",
    messagingSenderId: "175148772868",
    appId: "1:175148772868:web:9a301b733cb15626f6cf51"
}

export default initializeApp(firebaseApp)
