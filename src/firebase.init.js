// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2wHTEW8at6wstgJzI6-_Rc0u1fWVUXqE",
  authDomain: "inventory-management-sit-7c7f6.firebaseapp.com",
  projectId: "inventory-management-sit-7c7f6",
  storageBucket: "inventory-management-sit-7c7f6.appspot.com",
  messagingSenderId: "1033950285619",
  appId: "1:1033950285619:web:279b4e74dc3e4e1818f846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;