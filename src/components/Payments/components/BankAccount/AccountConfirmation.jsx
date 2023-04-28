import React from "react"

export default function AccountConfirmation({ handleListing }) {
  return (
    <div>
      <div className="my-16">
        <div className="mt-24 font-bold md:text-xl text-center">
          Verify your bank account
        </div>
        <p className="text-center mt-7 mb-4 max-w-[400px] mx-auto">
          we deposit some cents to your bank account, please enter cents to
          verify your bank account
        </p>
      </div>
      <div>Cents Amount</div>
      <input className="border-2 px-2 mt-2  py-2 w-full rounded-lg outline-0 shadow-lg" />
      <button
        onClick={handleListing}
        className="text-lg text-white bg-[#02AFF3] p-4 text-center rounded-[20px] w-full mt-7"
      >
        Verify Bank Account
      </button>
      <p className="text-center my-4 text-sm">
        Didn't received cents?{" "}
        <span className="text-blue-dark underline ">Resend</span>
      </p>
    </div>
  )
}
