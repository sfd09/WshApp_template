import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGL0jnyxmAo4T2Wo3tt6mNEd_i71LQVG4",
  authDomain: "wshapp-aee92.firebaseapp.com",
  projectId: "wshapp-aee92",
  storageBucket: "wshapp-aee92.appspot.com",
  messagingSenderId: "181365439126",
  appId: "1:181365439126:web:7cdae332aea9bfe905a0b7"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export { auth, db };

