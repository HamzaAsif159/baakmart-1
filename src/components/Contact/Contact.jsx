import React from "react"
import Dropdown from "./components/DropDown"

export default function Contact() {
  return (
    <div className="w-full md:w-4/6 h-screen">
      <h1 className="font-bold text-xl md:text-2xl mt-4">Contact us</h1>
      <p className="text-[#C7C7CC]">Contact us via message</p>
      <hr className="border-blue-dark mt-4 mb-6" />
      <form>
        <p className="text-[#13223F] text-lg font-medium mb-[10px]">
          First Name *
        </p>
        <input
          required
          id="firstName"
          placeholder="Enter first name"
          type="text"
          className="border-2 p-2 mb-[10px] px-3 w-full rounded-[20px] outline- shadow-sm"
        />
        <p className="text-[#13223F] text-lg font-medium mb-[10px]">
          Family Name *
        </p>
        <input
          required
          id="familyName"
          placeholder="Enter family name"
          type="text"
          className="border-2 p-2 mb-[10px] px-3 w-full rounded-[20px] outline- shadow-sm"
        />
        <p className="text-[#13223F] text-lg font-medium mb-[10px]">Email *</p>
        <input
          required
          id="email"
          type="email"
          placeholder="Enter email"
          className="border-2 p-2 mb-[10px] px-3 w-full rounded-[20px] outline- shadow-sm"
        />
        <p className="text-[#13223F] text-lg font-medium mb-[10px]">
          Baakmart Seller ID
        </p>
        <input
          id="sellerID"
          placeholder="Enter Baakmart Seller ID"
          type="text"
          className="border-2 p-2 mb-[10px] px-3 w-full rounded-[20px] outline- shadow-sm"
        />
        <p className="text-[#13223F] text-lg font-medium mb-[10px]">
          Baakmart Agency ID
        </p>
        <input
          id="agencyID"
          placeholder="Enter Agency ID"
          type="text"
          className="border-2 p-2 mb-[10px] px-3 w-full rounded-[20px] outline- shadow-sm"
        />
        <p className="text-[#13223F] text-lg font-medium mb-[10px]">
          Baak Slot No
        </p>
        <input
          id="slotNo"
          placeholder="Enter Baak Slot No"
          type="text"
          className="border-2 p-2 mb-[10px] px-3 w-full rounded-[20px] outline- shadow-sm"
        />
        <p className="text-[#13223F] text-lg font-medium mb-[10px]">
          Baakmart Affiliate ID
        </p>
        <input
          id="affiliateID"
          placeholder="Enter Baakmart Affiliate ID "
          type="text"
          className="border-2 p-2 mb-[10px] px-3 w-full rounded-[20px] outline- shadow-sm"
        />
        <p className="text-[#13223F] text-lg font-medium mb-[10px]">
          Choose Category
        </p>
        <Dropdown />
        <p className="text-[#13223F] text-lg font-medium my-[10px]">Title *</p>
        <input
          required
          id="title"
          placeholder="Enter Title "
          type="text"
          className="border-2 p-2 mbt-[10px] mb-[10px] px-3 w-full rounded-[20px] outline- shadow-sm"
        />
        <textarea
          rows="10"
          cols="md:80"
          className="drop-shadow-lg rounded-lg my-3 px-3 py-2 w-full"
          placeholder="Your message here..."
        />
        <button
          type="submit"
          className="text-lg text-white bg-[#02AFF3] p-4 text-center rounded-[20px] w-full mt-7"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
