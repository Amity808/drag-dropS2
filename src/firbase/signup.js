import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { toast } from "react-toastify";
// get the firebase we are initialize
const auth = getAuth(firebase_app);

export default async function signUp(email, password) {
    let result = null;
    let err = null
    try {
        result = await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        err = error
        // await toast.error(error)
        console.log(error)
    }
    return { result, err}
}