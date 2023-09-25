import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import 'firebase/compat/storage';
import {getStorage} from 'firebase/storage';
import {ref as stroageRef} from 'firebase/storage'




export const firebaseConfig = {
    apiKey: "AIzaSyDM4C1YRZ14Lx_8NzbDnChklv9VInrgUmw",
  authDomain: "otplogin-c4da2.firebaseapp.com",
  projectId: "otplogin-c4da2",
  storageBucket: "otplogin-c4da2.appspot.com",
  messagingSenderId: "783500853422",
  appId: "1:783500853422:web:9b813df9ba59a87c31ad3f",
  measurementId: "G-69272HMPPD"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
};

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app);

export {stroageRef}