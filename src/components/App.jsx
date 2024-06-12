import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "../store/auth/operations";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import Layout from "./Layout/Layout";
import Profile from "./Profile/Profile";

const Home = lazy(() => import("../pages/Home/Home"));
const Register = lazy(() => import("../pages/Register/Register"));
const Login = lazy(() => import("../pages/Login/Login"));
const News = lazy(() => import("../pages/News/News"));
const Notices = lazy(() => import("../pages/Notices/Notices"));
const OurFriends = lazy(() => import("../pages/OurFriends/OurFriends"));
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
          element={<PrivateRoute redirectTo="/login" component={<Profile />} />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
