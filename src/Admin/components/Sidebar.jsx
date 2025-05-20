import { BiText, BiUser } from "react-icons/bi";
import { BiCartAdd } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ListMenu from "./ListMenu.jsx";
export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-[#9FB3DF] p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins text-[48px] text-white
                -900"
        >
          Kuliner Kita
        </span>
        <span
          id="logo-subtitle"
          className=" font-barlow font-semibold text-white
                -400"
        >
          {" "}
          Admin Panel{" "}
        </span>
      </div>

      {/* List menu*/}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <ListMenu
            id="menu 1"
            icon={<AiOutlineHome />}
            label="Dashboard"
            isActive
            to="/"
          />
          <ListMenu
            id="menu 2"
            icon={<BiCartAdd />}
            label="Produk"
            to="produk"
          />
          <ListMenu
            id="menu 3"
            icon={<BiText />}
            label="Artikel"
            to="artikel"
          />
          <ListMenu
            id="menu 4"
            icon={<BsPerson />}
            label="Karyawan"
            to="karyawan"
          />
          <ListMenu
            id="menu-5"
            to="/ErrorPage400"
            icon={<FaUserAlt />}
            label="ErrorPage400"
          />
          <ListMenu
            id="menu-6"
            to="/ErrorPage401"
            icon={<FaUserAlt />}
            label="ErrorPage401"
          />
          <ListMenu
            id="menu-7"
            to="/ErrorPage403"
            icon={<FaUserAlt />}
            label="ErrorPage403"
          />
          <ListMenu
            id="menu-8"
            to="/UserList"
            icon={<BiUser />}
            label="List User"
          />
          <ListMenu id="menu-9" to="/Login" icon={<BiLogIn />} label="Login" />
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-[#FFF1D5] px-4 py-2 rounded-md shadow-lg 
                mb-10 flex items-center"
        >
          <div id="footer-text" className="flex-1 p-2 text-white text-sm">
            <span className="text-black text-sm">
              {" "}
              ask you query, our support team will contact 24/7 to you !
            </span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
            >
              <span className="text-gray-600 flex items-center">
                {" "}
                <AiOutlinePlusCircle className="mr-4 text-xl" />
                Add Menus
              </span>
            </div>
          </div>
          <img
            id="footer-avatar"
            className="w-20 rounded-full"
            src="https://avatar.iran.liara.run/public/28"
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
