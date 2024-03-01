import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBP-kY_UftA9dfm6bGKMAczvikJfkTUWjY",
  authDomain: "postgram-d2aa2.firebaseapp.com",
  projectId: "postgram-d2aa2",
  storageBucket: "postgram-d2aa2.appspot.com",
  messagingSenderId: "483036266723",
  appId: "1:483036266723:web:4bfc2d5ea63afb25d505d6",
};

const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
