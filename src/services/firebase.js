import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: "AIzaSyDx0DYPPvEkoRdIKChcVsO8ktbGCqK-7QU",
  authDomain: "taller-escritorio-teste.firebaseapp.com",
  databaseURL: "https://taller-escritorio-teste.firebaseio.com",
  projectId: "taller-escritorio-teste",
  storageBucket: "taller-escritorio-teste.appspot.com",
  messagingSenderId: "81373426408",
  appId: "1:81373426408:web:4d9063d0a9c48725cb4f5d"
})

const googleAuth = new firebase.auth.GoogleAuthProvider()

export const database = firebase.database()

export const authWithGoogle = () => firebase.auth().signInWithPopup(googleAuth)

export const authLogout = () => firebase.auth().signOut()

export const getUser = () => firebase.auth().currentUser
