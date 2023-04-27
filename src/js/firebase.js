const firebaseConfig = {
  apiKey: 'AIzaSyCDwagmNci6v4dvA77B8IdUnTxyfLLBiHI',
  authDomain: 'cyberdude-giveaway.firebaseapp.com',
  projectId: 'cyberdude-giveaway',
  storageBucket: 'cyberdude-giveaway.appspot.com',
  messagingSenderId: '839823970043',
  appId: '1:839823970043:web:1461853222598d58eaea5e',
}

const COLLECTION_NAME = 'requests'

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()

const createRecord = (record) => {
  return db
    .collection(COLLECTION_NAME)
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

const getAllRequest = () => {
  return new Promise((resolve, reject) => {
    const results = db
      .collection(COLLECTION_NAME)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          return doc.data()
          console.log(doc.data())
        })
        resolve(results)
      })
      .catch((e) => {
        console.log('error in getting.', e)
        reject(e)
      })
  })
}
