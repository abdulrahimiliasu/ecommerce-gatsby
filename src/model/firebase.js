import firebase from "firebase"

// If you're not using Code Sandbox, never hard-code the keys! Add them in your .env file and link them here
var firebaseConfig = {
  apiKey: "AIzaSyDHabjK2gDYnmAtRsLY4nUn4Cltc4ybrxo",
  authDomain: "accessorys.firebaseapp.com",
  projectId: "accessorys",
  storageBucket: "accessorys.appspot.com",
  messagingSenderId: "49653100675",
  appId: "1:49653100675:web:fa19ad77daa066e8dbebb6",
  measurementId: "G-53T7N1ZBTR",
}

// Initialize Firebase
let instance

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance
    instance = firebase.initializeApp(firebaseConfig)
    return instance
  }

  return null
}
