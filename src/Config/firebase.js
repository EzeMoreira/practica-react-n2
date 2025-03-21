// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvS_-XnIqyw3VmgNaCr60U3ZSGO436Kdk",
  authDomain: "reactapp-cb411.firebaseapp.com",
  projectId: "reactapp-cb411",
  storageBucket: "reactapp-cb411.firebasestorage.app",
  messagingSenderId: "854959113789",
  appId: "1:854959113789:web:812c8581faa2030ace0c54"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase