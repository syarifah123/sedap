import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./praktikum/assets/tailwind.css";
// import ErrorPage400 from "./pages/ErrorPage400";

import Loading from "./praktikum/components/Loading";
const NotFound = React.lazy(() => import("./praktikum/pages/NotFound"));
const ErrorPage403 = React.lazy(() => import("./praktikum/pages/ErrorPage403"));
const ErrorPage401 = React.lazy(() => import("./praktikum/pages/ErrorPage401"));
const ErrorPage400 = React.lazy(() => import("./praktikum/pages/ErrorPage400"));
const UserList = React.lazy(() => import("./praktikum/pages/UserList"));
const FormCustomer = React.lazy(() => import("./praktikum/pages/FormCustomer"));
const FormOrder = React.lazy(() => import("./praktikum/pages/FormOrder"));
const MainLayout = React.lazy(() => import("./praktikum/layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./praktikum/layouts/AuthLayout"));
const Login = React.lazy(() => import("./praktikum/pages/auth/Login"));
const Register = React.lazy(() => import("./praktikum/pages/auth/Register"));
const Forgot = React.lazy(() => import("./praktikum/pages/auth/Forgot"));
const Orders = React.lazy(() => import("./praktikum/pages/Order"));
const Customer = React.lazy(() => import("./praktikum/pages/Customer"));
const Dashboard = React.lazy(() => import("./praktikum/pages/Dashboard"));
const Products = React.lazy(() => import("./praktikum/pages/Products"));
const ProductDetail = React.lazy(() => import("./praktikum/pages/ProductDetail"))

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
          <Route path="products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} /> 
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
