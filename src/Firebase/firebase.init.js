import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// firebase initialization
const initilizeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initilizeAuthentication;