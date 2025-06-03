import { MdProductionQuantityLimits } from "react-icons/md"; 
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import ListMenu from "../components/ListMenu";
// import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
    ${
      isActive
        ? "text-hijau bg-green-200 font-extrabold"
        : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;
  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins-extrabold font-bold text-[48px] text-gray-900"
        >
          Sedap <b id="logo-dot" className=" text-hijau"></b>
        </span>
        <span
          id="logo-subtitle"
          className="font-barlow font-semibold text-gray-400"
        >
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <ListMenu id="menu-1" to="/" icon={<MdDashboard />} label="Dashboard" />
        <ListMenu id="menu-2" to="/Order" icon={<FaShoppingCart />} label="Orders" />
        <ListMenu id="menu-3" to="/Customer" icon={<FaUserAlt />} label="Customers" />
        <ListMenu id="menu-4" to="/ErrorPage400" icon={<FaUserAlt />} label="ErrorPage400" />
        <ListMenu id="menu-5" to="/ErrorPage401" icon={<FaUserAlt />} label="ErrorPage401" />
        <ListMenu id="menu-6" to="/ErrorPage403" icon={<FaUserAlt />} label="ErrorPage403" />
        <ListMenu id="menu-7" to="/UserList" icon={<FaUserAlt />} label="List User" />
        <ListMenu id="menu-8" to="/Products" icon={<MdProductionQuantityLimits />} label="Products" />
        <ListMenu id="menu-8" to="/Notes" icon={<MdProductionQuantityLimits />} label="Notes" />



      </ul>
    </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
        >
          <div id="footer-text" className="text-white text-sm cursor-pointer">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
            >
              <span className="text-gray-600 flex items-center">
                <MdAdd className="mr-4 text-xl" />
                Add Menus
              </span>
            </div>
          </div>
          <img
            id="footer-avatar"
            src="https://avatar.iran.liara.run/public/28"
            className="w-20 rounded-full"
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}
