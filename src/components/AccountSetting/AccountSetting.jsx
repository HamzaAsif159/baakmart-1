import React from "react"
import AccountDetailsCard from "../Common/AccountDetailsCard"

export default function AccountSetting() {
  return (
    <div className="w-full md:w-4/6 mt-4 h-screen">
      <h1 className="font-bold text-xl md:text-2xl">Account Setting</h1>
      <p className="text-[#C7C7CC]">Lorem ipsum Lorem ipsum Lorem ipsum</p>
      <hr className="border-blue-dark mt-4 mb-6" />
      <section>
        <h3 className="font-bold my-5">Address</h3>
        <h3>Business Address</h3>
        <input
          type="text"
          className="border-2 px-2 my-3  py-2 w-full rounded-lg outline-0 shadow-lg"
        />
        <h3 className="font-bold my-3">Contact Info</h3>
        <div className="md:flex gap-3 my-3">
          <div className="w-full">
            <h3>Mobile</h3>
            <input
              type="text"
              className="border-2 px-2 mt-2 mb-3  py-2 w-full rounded-lg outline-0 shadow-lg"
            />
          </div>
          <div className="w-full">
            <h3>Tel</h3>
            <input
              type="text"
              className="border-2 px-2 mt-2 mb-3  py-2 w-full rounded-lg outline-0 shadow-lg"
            />
          </div>
        </div>
        <h3 className="font-bold my-3">Payment Methods</h3>
        <AccountDetailsCard
          name="ABCBank"
          accountNo="#############"
          iban=" - - - - - - - - - -"
        />
        <button className="text-lg text-white bg-[#02AFF3] p-4 text-center rounded-[20px] w-full mt-7">
          Update Setting
        </button>
      </section>
    </div>
  )
}
