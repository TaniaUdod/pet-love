import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../store/auth/operations";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <div>Profile</div>;
};

export default Profile;
