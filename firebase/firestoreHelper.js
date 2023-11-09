import { collection, addDoc, deleteDoc, doc } from "firebase/firestore"
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