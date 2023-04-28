import React from "react"
import { useNavigate } from "react-router-dom"

export default function EmailTemplates() {
  let navigate = useNavigate()
  return (
    <div className="w-full md:w-4/6 h-screen mt-6">
      <div className="md:flex items-center justify-between">
        <div>
          <h1 className="font-bold md:text-2xl">Affiliate E-Mail Templates</h1>
          <p className="text-[#C7C7CC]">Lorem ipsum Lorem ipsum Lorem ipsum</p>
        </div>
        <p
          className="cursor-pointer bg-[#02AFF3] text-sm rounded-[8px] p-2 font-semibold text-center text-white my-2 md:mt-0"
          onClick={() => navigate("/email-template")}
        >
          Create Email Template
        </p>
      </div>
      <hr className="border-blue-dark mt-4 mb-6" />
      <div className="flex flex-col items-center justify-center gap-2 h-[32rem] max-w-[300px] mx-auto text-center">
        <p className="font-sm font-bold">No email template created yet!</p>
        <p className="font-xs font-light">
          This section will show your created email templates to promote your
          services
        </p>
        <button
          className="bg-blue-dark text-white font-bold py-4 px-6 rounded-md mt-3"
          onClick={() => navigate("/email-template")}
        >
          Create Email template
        </button>
      </div>
    </div>
  )
}
