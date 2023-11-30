import { collection, addDoc, deleteDoc, doc, setDoc, getDoc, snapshot } from "firebase/firestore"
import { database, auth } from "./firebaseSetup"

export async function writeToDB(goal) {
  try {
    console.log("uid:", auth.currentUser.uid);
    const docRef = await addDoc(collection(database, "goals"), {...goal, user: auth.currentUser.uid});
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error writing document: ", error);
  }
}

export async function deleteFromDB(id){
  try {
    await deleteDoc(doc(database, "goals", id));
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}

export async function saveUserInfo(info){
  try {
    await setDoc(doc(database, "users", auth.currentUser.uid), info,{merge: true})
  } catch (error) {
    console.error("save user info", error)
  }
}

export async function getUserInfo() {
  try {
    const docSnapshot = await getDoc(
      doc(database, "users", auth.currentUser.uid)
    );
    if (docSnapshot.exists()) {
      return docSnapshot.data();
    }
  } catch (err) {
    console.log("save user info ", err);
  }
}