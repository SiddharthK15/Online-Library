import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDUhPfA10UTvB13xLGSIopeyaCj_Y0oYFo",
  authDomain: "online-library-357d0.firebaseapp.com",
  projectId: "online-library-357d0",
  storageBucket: "online-library-357d0.appspot.com",
  messagingSenderId: "634044414108",
  appId: "1:634044414108:web:79a2a0a89a7c5a052a5559"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()