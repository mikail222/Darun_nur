import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDc2sXI3sw_Lr6vpOIpVjYP9zNeY_wR2mE",
  authDomain: "darun-nur-production.firebaseapp.com",
  databaseURL: "https://darun-nur-production-default-rtdb.firebaseio.com",
  projectId: "darun-nur-production",
  storageBucket: "darun-nur-production.appspot.com",
  messagingSenderId: "149484395313",
  appId: "1:149484395313:web:274001d9bbaecd56c56e10",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
