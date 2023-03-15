import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider).then(() => {
    window.location.href="/dashboard"
  })
}

const githubProvider = new firebase.auth.GithubAuthProvider()

export const signInWithGithub = () => {
  auth.signInWithPopup(githubProvider).then(() => {
    window.location.href = "/dashboard"
  })
}
