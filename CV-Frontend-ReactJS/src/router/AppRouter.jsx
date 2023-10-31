import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage,RegisterPage  } from "../auth/index";
import { HomePage } from "../pages/HomePage/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login, logout } from "../store/auth/authSlice";
import { PrincipalPage } from "../pages/PrincipalPage/PrincipalPage";
import RegisterEmpresa from "../auth/RegisterEmpresa";
import { TrabajoPage } from "../pages/TrabajoPage/TrabajoPage";

export const AppRouter = () => {  
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      dispatch(logout());
    } else {
      dispatch(login({ id: user.id, nombre: user.nombre}));
    }    
  }, [status]);

  const PrivateRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trabajos" element={<TrabajoPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    );
  };

  const PublicRoutes = () => {
    return (
      <Routes>
        <Route path="/auth/login" element={ <LoginPage />} />
        <Route path="/auth/register" element={ <RegisterPage />} />
        <Route path="/auth/registerEmpresa" element={ <RegisterEmpresa />} />
        {/* <Route path="/*" element={ <LoginPage />} />         */}
        <Route path="/*" element={ <PrincipalPage />} />        

      </Routes>
    );
  };

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<PrivateRoutes />} />
      ) : (        
        <Route path="/*" element={<PublicRoutes />} />
      )}
    </Routes>
  );
};
