import { collection, addDoc, deleteDoc, doc } from "firebase/firestore"
import { database } from "./firebaseSetup"

export async function writeToDB(goal) {
  try {
    const docRef = await addDoc(collection(database, "goals"), goal);
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