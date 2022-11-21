import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnr6-F946UTWla3zG8zTqHn1r8IuQMyBQ",
  authDomain: "todos-react-test.firebaseapp.com",
  projectId: "todos-react-test",
  storageBucket: "todos-react-test.appspot.com",
  messagingSenderId: "362119142962",
  appId: "1:362119142962:web:241fc5f49da8fa69d7a62b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)