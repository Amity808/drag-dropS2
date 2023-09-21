import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore"

// initialize database
const db = getFirestore(firebase_app)

export default async function addDetails(collectionType, id, data) {
    let result = null, err = null;

    try {
        result = await setDoc(doc(db, collectionType, id), data, {
            merge: true,
        })
    } catch (e) {
        err = e
        console.log(e)
    }
    return { result, err}
}