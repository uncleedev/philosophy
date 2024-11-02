// configs/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    // LAGAY MO LANG MGA CONFIG TAPOS SAVE MO THEN TAPOS NA WALA KANANG GAGAWIN
  apiKey: "AIzaSyBIeZK9Gg-XjnhT7CL2RMW5rCj-SYEreSM",
  authDomain: "philosophy-89261.firebaseapp.com",
  projectId: "philosophy-89261",
  storageBucket: "philosophy-89261.firebasestorage.app",
  messagingSenderId: "622614696070",
  appId: "1:622614696070:web:ebca6d25df5f28d2794107"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { app, auth };