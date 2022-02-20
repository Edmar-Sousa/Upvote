import { useState } from 'react'
import './App.css'

import { AuthenticateUserWithGoogle } from './services/auth'
import LoginPage from './pages/Login'
import VotePage  from './pages/Vote'

import { AppContext, AppContextType, defaultContext } from './context'


function App() {
    const [userLogin, setUserLogin] = useState<AppContextType>(defaultContext);

    function loginFunction() {
        AuthenticateUserWithGoogle()
            .then((user : any) => { 
                setUserLogin({
                    authenticated : true,
                    userName : user.userName,
                    token    : user.token,
                    uid      : user.uid,
                    photoURL : user.photoURL
                })
            })
            .catch(err => console.log(err))
    }


    function buildLoginPage() {
        return <LoginPage LoginFunctionCallback={loginFunction} ></LoginPage>
    }

    function buildVotePage() {
        return <VotePage></VotePage>
    }

    return (
        <div className="app">
            <AppContext.Provider value={ userLogin }>
                { userLogin.authenticated ? buildVotePage() : buildLoginPage() }
            </AppContext.Provider>
        </div>
    )
}

export default App