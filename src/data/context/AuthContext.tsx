import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import firebase from '../../firebase/config'
import User from '../../model/User'

interface AuthContextProps {
    user?: User,
    loginGoogle?: () => Promise<void>,
    logout?: () => Promise<void>,
    isLoading?: boolean
}

const AuthContext = createContext<AuthContextProps>({})

async function userFormateed(userFirebase: firebase.User): Promise<User> {
    const token = await userFirebase.getIdToken()

    return  {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token, 
        provider: userFirebase.providerData[0].providerId,
        photoUrl: userFirebase.photoURL
    }
}

function cookieManager(isLogged: boolean) {
    if(isLogged) {
        Cookies.set("admin-nextjs-auth", isLogged, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-nextjs-auth')
    }
}

export function AuthProvider(props) {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState<User>(null)

    async function sessionConfig(userFirebase) {
        if(userFirebase?.email) {
            const user = await userFormateed(userFirebase)
            setUser(user)
            cookieManager(true)
            setIsLoading(false)

            return user.email
        } else {
            setUser(null)
            cookieManager(false)
            setIsLoading(false)

            return false
        }
    }

    async function loginGoogle() {
        try {
            setIsLoading(true)
            const response = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
    
            sessionConfig(response.user)
            route.push('/')
        } finally {
            setIsLoading(false)
        }
    }

    async function logout() {
        console.log("logout")
        try {
            setIsLoading(true)
            await firebase.auth().signOut()
            await sessionConfig(null)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if(Cookies.get('admin-nextjs-auth')) {
            const cancel = firebase.auth().onIdTokenChanged(sessionConfig)
            return () => cancel()
        } else {
            setIsLoading(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            loginGoogle,
            logout,
            isLoading
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext