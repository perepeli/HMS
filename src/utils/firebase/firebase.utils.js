import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCuzMR-YFVjJbeM95tUCO943YZaU_c0rqo",
  authDomain: "crwn-clothing-db-15705.firebaseapp.com",
  projectId: "crwn-clothing-db-15705",
  storageBucket: "crwn-clothing-db-15705.appspot.com",
  messagingSenderId: "661714394542",
  appId: "1:661714394542:web:26245707bfd9b1cc11bc3f",
  measurementId: "G-RGSK927QGK"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCyPZ1A9a3tlfEiAK4tIMhr2xmEHJUg-84",
//   authDomain: "healty-meal.firebaseapp.com",
//   databaseURL: "https://healty-meal-default-rtdb.firebaseio.com",
//   projectId: "healty-meal",
//   storageBucket: "healty-meal.appspot.com",
//   messagingSenderId: "257768313354",
//   appId: "1:257768313354:web:6468d345b1d9d664d885f3",
//   measurementId: "G-G7KLYX47SY"
// };

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);