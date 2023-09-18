import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBTJC2qF8NwrMA0hupfwfcN04Ikuki-RF8',
  authDomain: 'fir-b95af.firebaseapp.com',
  projectId: 'fir-b95af',
  storageBucket: 'fir-b95af.appspot.com',
  messagingSenderId: '939603304537',
  appId: '1:939603304537:web:aced9c1ae17631d9325148',
  measurementId: 'G-V8PCB48KHN',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
