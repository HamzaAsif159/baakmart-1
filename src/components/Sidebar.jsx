import SidebarTab from "./SidebarTab"
import { NavLink } from "react-router-dom"
import image from "../assets/images/photo.jpg"
import logo from "../assets/logo.svg"

function Sidebar() {
  return (
    <>
      <div className="hidden md:block w-[30%] p-6 rounded-[10px] bg-white mb-5 drop-shadow-lg self-start">
        <div className="flex flex-col items-center">
          <img src={logo} alt="log" />
        </div>
        <hr className="border-blue-dark mt-4 mb-6" />
        <div className="m-auto flex justify-start items-center gap-5 text-center p-3 rounded-[10px] my-[15px] bg-gradient-to-b from-gradient-start to-gradient-end">
          <img src={image} className="rounded-full" alt="" />
          <div className="">
            <p className="text-xl text-white font-bold">Business name</p>
            <p className="text-base text-white">Affiliate ID: 001298</p>
          </div>
        </div>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "text-sidebar-gray"
          }
        >
          <SidebarTab tabText={"Dashboard"} />
        </NavLink>
        <NavLink
          to="/payments"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "text-sidebar-gray"
          }
        >
          <SidebarTab tabText={"Payments"} />
        </NavLink>
        <NavLink
          to="/promotion-code"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "text-sidebar-gray"
          }
        >
          <SidebarTab tabText={"Promotion Code"} />
        </NavLink>
        <NavLink
          to="/affiliate-links"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "text-sidebar-gray"
          }
        >
          <SidebarTab tabText={"Affiliate links"} />
        </NavLink>
        <NavLink
          to="/affiliate-email-templates"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "text-sidebar-gray"
          }
        >
          <SidebarTab tabText={"Affiliate E-mail Templates"} />
        </NavLink>
        <NavLink
          to="/affiliate-link-report"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "text-sidebar-gray"
          }
        >
          <SidebarTab tabText={"Affiliate Link Report"} />
        </NavLink>
        <NavLink
          to="/account-setting"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "text-sidebar-gray"
          }
        >
          <SidebarTab tabText={"Account Setting"} />
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "text-sidebar-gray"
          }
        >
          <SidebarTab tabText={"Contact Us"} />
        </NavLink>
        <NavLink
          to="/agreement"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "text-sidebar-gray"
          }
        >
          <SidebarTab tabText={"Agreement"} />
        </NavLink>
        <NavLink
          to="/help"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "text-sidebar-gray"
          }
        >
          <SidebarTab tabText={"Help"} />
        </NavLink>
        <NavLink
          to="/feedback"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "text-sidebar-gray"
          }
        >
          <SidebarTab tabText={"Feedback"} />
        </NavLink>
        <NavLink
          to="/logout"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "text-sidebar-gray"
          }
        >
          <SidebarTab tabText={"Logout"} />
        </NavLink>
      </div>
    </>
  )
}

export default Sidebar
