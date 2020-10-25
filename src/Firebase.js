import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
const config = {
    apiKey: "AIzaSyDdfqFFKnwB1gT9OAx8GnUl-GWZaF-CrOw",
    authDomain: "digital-shapers-289710.firebaseapp.com",
    databaseURL: "https://digital-shapers-289710.firebaseio.com",
    projectId: "digital-shapers-289710",
    storageBucket: "digital-shapers-289710.appspot.com",
    messagingSenderId: "252591155053",
    aapId: "1:252591155053:web:91694e3902e0eccb649c64"
};
firebase.initializeApp(config);
firebase.firestore().settings({});
export default firebase;