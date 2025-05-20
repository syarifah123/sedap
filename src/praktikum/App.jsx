import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/tailwind.css";
// import ErrorPage400 from "./pages/ErrorPage400";


import Loading from "./components/Loading";
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ErrorPage403 = React.lazy(() => import("./pages/ErrorPage403"));
const ErrorPage401 = React.lazy(() => import("./pages/ErrorPage401"));
const ErrorPage400 = React.lazy(() => import("./pages/ErrorPage400"));
const UserList = React.lazy(() => import("./pages/UserList"));
const FormCustomer = React.lazy(() => import("./pages/FormCustomer"));
const FormOrder = React.lazy(() => import("./pages/FormOrder"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Orders = React.lazy(() => import("./pages/Order"));
const Customer = React.lazy(() => import("./pages/Customer"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));


// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

// import Orders from "./pages/Order";
// import Customer from "./pages/Customer";

// import Dashboard from "./pages/Dashboard";

// import FormOrder from "./pages/FormOrder";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
// import Forgot from "./pages/Auth/Forgot";
//

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/praktikum" element={<Dashboard />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/FormCustomer" element={<FormCustomer />} />
          <Route path="/FormOrder" element={<FormOrder />} />
          <Route path="/UserList" element={<UserList />} />
        </Route>

        <Route path="/ErrorPage400" element={<ErrorPage400 />} />
        <Route path="/ErrorPage401" element={<ErrorPage401 />} />
        <Route path="/ErrorPage403" element={<ErrorPage403 />} />

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
