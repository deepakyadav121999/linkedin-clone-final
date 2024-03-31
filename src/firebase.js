
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB0lcM3kkqsLigijxmFzSWMPCJl6fEQEx4",
  authDomain: "linked-clone-ff9b7.firebaseapp.com",
  projectId: "linked-clone-ff9b7",
  storageBucket: "linked-clone-ff9b7.appspot.com",
  messagingSenderId: "352207683072",
  appId: "1:352207683072:web:d0b19a59d797798a5b62e5"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app)
export{db,auth}
