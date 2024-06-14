import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "../store/auth/operations";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import Layout from "./Layout/Layout";

const Home = lazy(() => import("../pages/Home/Home"));
const Register = lazy(() => import("../pages/Register/Register"));
const Login = lazy(() => import("../pages/Login/Login"));
const News = lazy(() => import("../pages/News/News"));
const Notices = lazy(() => import("../pages/Notices/Notices"));
const OurFriends = lazy(() => import("../pages/OurFriends/OurFriends"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const AddPet = lazy(() => import("../pages/AddPet/AddPet"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/friends" element={<OurFriends />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/profile" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/profile" component={<Login />} />}
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute redirectTo="/profile" component={<Profile />} />
          }
        />
        <Route
          path="/add-pet"
          element={
            <PrivateRoute redirectTo="/profile" component={<AddPet />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
