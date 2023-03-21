const firebaseConfig = {
  apiKey: 'AIzaSyCDwagmNci6v4dvA77B8IdUnTxyfLLBiHI',
  authDomain: 'cyberdude-giveaway.firebaseapp.com',
  projectId: 'cyberdude-giveaway',
  storageBucket: 'cyberdude-giveaway.appspot.com',
  messagingSenderId: '839823970043',
  appId: '1:839823970043:web:1461853222598d58eaea5e',
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()

const createRecord = (record) => {
  return db
    .collection('requests')
    .add(record)
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch((error) => {
      console.error('Error adding document: ', error)
    })
}

const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user

        resolve(user)
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message

        reject({ errorCode, errorMessage })
      })
  })
}
