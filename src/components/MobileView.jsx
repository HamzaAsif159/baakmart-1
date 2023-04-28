import React from "react"
import { useNavigate } from "react-router-dom"

import logo from "../assets/logo.svg"
import image from "../assets/images/photo.jpg"
import menuIcon from "../assets/menuIcon.png"
import close from "../assets/close.png"

export default function MobileView() {
  const [show, setShow] = React.useState(false)
  let navigate = useNavigate()

  function handleClick() {
    console.log("clicked")
    setShow(true)
  }

  function routeToComponent(comp) {
    setShow(false)
    navigate(`${comp}`)
  }

  return (
    <>
      <div className="w-full md:hidden mb-4">
        <div className="flex justify-between items-center">
          <img src={logo} alt="log" className="h-10" />
          <img
            src={menuIcon}
            alt="menu"
            className="cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>
      {show && (
        <div
          className={`w-full h-screen p-4 fixed top-0 left-0 z-[999] bg-white ${
            show ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <img
            src={close}
            className="cursor-pointer float-right"
            alt=""
            onClick={() => setShow(false)}
          />
          <div className="flex flex-col items-center gap-5 mt-20 text-xl font-semibold text-themePurple">
            <div className="m-auto flex justify-start items-center gap-5 text-center p-3 rounded-[10px] my-[15px] w-full bg-gradient-to-b from-gradient-start to-gradient-end">
              <img src={image} className="rounded-full" alt="" />
              <div className="">
                <p className="text-xl text-white font-bold">Business name</p>
                <p className="text-base text-white">Affiliate ID: 001298</p>
              </div>
            </div>
            <div onClick={() => routeToComponent(`/`)}>Dashboard</div>
            <div onClick={() => routeToComponent(`payments`)}>Payments</div>
            <div onClick={() => routeToComponent(`/promotion-code`)}>
              Promotion Code
            </div>
            <div onClick={() => routeToComponent(`/affiliate-links`)}>
              Affiliate links
            </div>
            <div onClick={() => routeToComponent(`/affiliate-email-templates`)}>
              Affiliate E-Mail Templates
            </div>
            <div onClick={() => routeToComponent(`/affiliate-link-report`)}>
              Affiliate Link Report
            </div>
            <div onClick={() => routeToComponent(`/account-setting`)}>
              Account Setting
            </div>
            <div onClick={() => routeToComponent(`/contact-us`)}>
              Contact us
            </div>
            <div onClick={() => routeToComponent(`/agreement`)}>Agreement</div>
          </div>
        </div>
      )}
    </>
  )
}
