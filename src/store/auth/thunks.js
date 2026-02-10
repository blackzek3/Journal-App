import { checkingCredentials } from "./authSlice"
import { singInWithGoogle } from '../../firebase/providers'
export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        
        dispatch( checkingCredentials() );



    }
}

export const starGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await singInWithGoogle();
        console.log({ result })
    } 
}