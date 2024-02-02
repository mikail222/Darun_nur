// import "react-devtools";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Accessibility/Login";
import Home from "./Home/Home";
import Sign_in from "./Accessibility/Sign_in";
import { useEffect, useState } from "react";
import Affilate from "./Home/Affilate";
import Contact from "./Service/Contact";
import Visa_assistance from "./Service/Visa_assistance";
import darunnur from "./assets/darun-nur-low-resolution-logo-color-on-transparent-background.png";
import Affilate_Registration from "./Home/Affilate_Registration";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./firebaseConfig";
import Scholarship from "./Home/Scholarship";
import User_modal from "./Accessibility/User_modal";
import Update from "./Accessibility/Update";
import Reset_Password from "./Accessibility/Reset_Password";
import About_us from "./Home/About_us";
import Vacation from "./Home/Vacation";
import Dashboard_nav from "./Accessibility/Dashboard_nav";
import Dashboard from "./Accessibility/Dashboard";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [affilate, setAffilate] = useState([]);
  const collectionOfUser = collection(db, "users");

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(collectionOfUser);
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
    // console.log(doc);
  }, []);
  useEffect(() => {
    const unsubs = onSnapshot(
      collection(db, "Afillate"),
      (snapShot) => {
        const Affiliates = [];
        snapShot.forEach((doc) => {
          Affiliates.push({ id: doc.id, ...doc.data() });
        });
        setAffilate(affilate);
      },
      (error) => {
        alert(error);
      }
    );
    return () => {
      unsubs();
    };
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home navigate={navigate} darunnur={darunnur} />}
        />
        <Route
          path="/Login"
          element={
            <Login navigate={navigate} darunnur={darunnur} user={user} />
          }
        />
        <Route
          path="/Sign_in"
          element={
            <Sign_in navigate={navigate} darunnur={darunnur} user={user} />
          }
        />
        <Route path="/About_us" element={<About_us />} />
        <Route path="/User_modal" element={<User_modal user={user} />} />
        <Route path="/Update" element={<Update navigate={navigate} />} />
        <Route
          path="/Reset_Password"
          element={<Reset_Password navigate={navigate} />}
        />

        <Route path="/Visa_assistance" element={<Visa_assistance />} />
        <Route path="/Vacation" element={<Vacation />} />
        <Route path="/Affilate" element={<Affilate navigate={navigate} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Affilate_Registration"
          element={<Affilate_Registration affilate={affilate} />}
        />

        <Route
          path="/Dashboard/*"
          element={<Dashboard user={user} navigate={navigate} />}
        />
        <Route
          path="/Scholarship"
          element={<Scholarship navigate={navigate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
