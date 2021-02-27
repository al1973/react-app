import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD6SKTnQnfIA9HvlV8u8ji0DVupxEzwxno",
    authDomain: "catch-of-the-day-329e0.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-329e0-default-rtdb.firebaseio.com"
    
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;