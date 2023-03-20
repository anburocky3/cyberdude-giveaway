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
