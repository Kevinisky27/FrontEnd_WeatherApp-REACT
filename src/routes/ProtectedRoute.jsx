// Ruta protegida de autentificación
import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

export function ProtectedRoute() {
  const [isAuth] = useState(true) //Para protección debe de ser false 

  // validación de protección
  return isAuth ? <Outlet/> : <Navigate to= '/'/>
}