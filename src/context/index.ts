import { createContext } from 'react'


export const defaultContext : AppContextType = { 
    authenticated : false,
    userName : '',
    photoURL : '',
    token : '',
    uid : ''
}


export interface AppContextType {
    authenticated : Boolean;
    userName : string;
    photoURL : string;
    token : string;
    uid : string;
}

export const AppContext = createContext(defaultContext)
