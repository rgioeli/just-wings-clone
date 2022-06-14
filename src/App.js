import "./App.css";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/components/Home";
import Order from "./pages/order/components/Order";
import Menu from "./pages/order/components/menu/Menu";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import GetOrderLocation from "./pages/order/components/GetOrderLocation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locations" element={<GetOrderLocation />} />
        <Route path="/order/:method" element={<Order />} />
      </Route>
    </Routes>
  );
}

function Contact() {
  return <p>Contact</p>;
}

export default App;
