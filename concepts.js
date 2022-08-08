
import "./App.css";
import HomeScreen from "./screen/HomeScreen";
import { Route, Routes, useLocation } from "react-router-dom";
import MainScreen from "./screen/MainScreen";
import Login from "./components/Login";
import Register from "./components/Register";
import { useDispatch } from "react-redux";
import { clearMessage } from "./actions/message";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileScreen from "./screen/ProfileScreen";
import AuthVerify from "./common/AuthVerify";
import { logout } from "./actions/auth";
import ContactUs from "./screen/ContactUs";
import VideoPlayer from "./components/VideoPlayer";
import Adminboard from "./screen/Adminboard";
import Payment from "./Payment/Payment";
// import StripePay from "./Payment/StripePay";

function App() {
  // const [showAdminBoard, setShowAdminBoard] = useState(false);

  // const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let location = useLocation();

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  // useEffect(() => {
  //   if (currentUser) {
  //     setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
  //   } else {
  //     setShowAdminBoard(false);
  //   }
  // }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/mainscreen" element={<MainScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/demo" element={<VideoPlayer />} />
        <Route path="/admin" element={<Adminboard />} />
      </Routes>
      <AuthVerify logOut={logOut} />
    </div>
  );
}

export default App;

            