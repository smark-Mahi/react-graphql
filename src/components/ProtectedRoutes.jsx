import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const ProtectedRoutes = () => {
  let login = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      navigate("/auth");
    }
  }, [login]);
  return <Outlet />;
};

export default ProtectedRoutes;
