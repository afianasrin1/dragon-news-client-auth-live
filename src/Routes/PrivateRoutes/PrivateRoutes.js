import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Spinner from "react-bootstrap/Spinner";
const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <>
        <Spinner animation="border" size="sm" />
        <Spinner animation="border" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
      </>
    );
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};
export default PrivateRoutes;
