import { checkingCredentials } from "./authSlice"

export const checkingAutentication = ( email, password ) => {
    return async( dispath ) => {

        dispath( checkingCredentials() );

    }
}