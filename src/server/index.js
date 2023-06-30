import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAXhXNR7kElGnb_fAiceU1IgdEs17Ub_Yg",
  authDomain: "olcha-52e05.firebaseapp.com",
  projectId: "olcha-52e05",
  storageBucket: "olcha-52e05.appspot.com",
  messagingSenderId: "583475571683",
  appId: "1:583475571683:web:667873d6663ca8bae88ed6",
  measurementId: "G-MMNQTKYLR1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);