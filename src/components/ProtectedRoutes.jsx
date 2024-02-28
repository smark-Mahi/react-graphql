import { Outlet, useNavigate } from "react-router-dom";
import Auth from "../pages/Auth";
import { jwtDecode } from "jwt-decode";
const ProtectedRoutes = () => {
  let login = localStorage.getItem("token") || "";

  let currentDate = new Date();

  if (login) {
    let decodedToken = jwtDecode(login);
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      localStorage.removeItem("token");
    }
  }

  // useEffect(() => {
  //   if (!login) {
  //     navigate("/auth");
  //   }
  // }, [login]);
  return !login ? <Auth /> : <Outlet />;
};

export default ProtectedRoutes;
