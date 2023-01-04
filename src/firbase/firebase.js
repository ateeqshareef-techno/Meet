// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyDJzGfd3ycOE5rVTuTzAQT1cGC1NszRy7E',
  authDomain: 'meet-2bf66.firebaseapp.com',
  projectId: 'meet-2bf66',
  storageBucket: 'meet-2bf66.appspot.com',
  messagingSenderId: '709282864091',
  appId: '1:709282864091:web:348e55f4797b2f4e72a5fe',
  measurementId: 'G-W01XXMT4E2'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
