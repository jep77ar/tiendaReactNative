import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const signUp = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      console.log("En signUp1: ", userCredential);
      const user = userCredential.user;
      // await setDoc(doc(db, "users", user.uid), {});
      return { isOk: true, resp: user.uid };
    })
    .catch((error) => {
      console.log("En signUp2: ", error);
      alert(error.message);
      return { isOk: false, resp: error.message };
    });
};

export const signIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("En signIn1: ", userCredential);
      return { isOk: true, resp: userCredential.user.uid };
    })
    .catch((error) => {
      console.log("En signIn2: ", error);
      alert(error.message);
      return { isOk: false, resp: error.message };
    });
};

export const getCurrentUser = async () => await auth.currentUser;
export const logout = async () => await signOut(auth);
