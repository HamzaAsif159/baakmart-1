import React from "react"
import DragDrop from "./components/DragDrop"

export default function EmailTemplate() {
  function InputDetails({ placeholder }) {
    return (
      <input
        type="text"
        className="border-2 px-2 mt-2  py-2 w-full rounded-lg outline-0 shadow-lg"
        placeholder={placeholder}
      />
    )
  }
  return (
    <div className="w-full md:w-4/6 h-screen mt-6">
      <h1 className="font-bold text-xl md:text-2xl">
        Affiliate E-Mail Templates
      </h1>
      <p className="text-[#C7C7CC]">Lorem ipsum Lorem ipsum Lorem ipsum</p>
      <hr className="border-blue-dark mt-4 mb-6" />
      <div>
        <div>Attractive Main Title</div>
        <InputDetails placeholder="Select Bank" />
        <div className="bg-blue-dark h-[220px] flex flex-col justify-center items-center rounded-md my-4">
          <DragDrop />
        </div>
        <div>Body Title</div>
        <InputDetails placeholder="Select Bank" />
        <div className="mt-4 ">Body Text</div>
        <textarea
          rows="10"
          cols=" md:80"
          className="outline-0 mt-2 shadow-xl w-full rounded-lg"
        />
        <div className="mt-4">Footer</div>
        <InputDetails placeholder="Company name / Email / Contact No etc." />
        <button className="text-lg text-white bg-[#02AFF3] p-4 text-center rounded-[20px] w-full mt-7">
          Publish
        </button>
      </div>
    </div>
  )
}
