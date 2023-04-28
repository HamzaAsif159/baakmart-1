import React from "react"
import { useState } from "react"
import AccountDetailCard from "../../../Common/AccountDetailsCard"
import AccountConfirmation from "./AccountConfirmation"

export default function BankAccount() {
  const [accountListing, setAccountListing] = useState(false)
  const [bankDetail, setBankDetail] = useState(true)
  const [bankDetailSec, setBankDetailSec] = useState(false)
  const [accountConfirm, setAccountConfirm] = useState(false)
  const [bankDetailThird, setBankDetailThird] = useState(false)

  function handleClick() {
    setBankDetailSec(true)
    setBankDetail(false)
  }
  function handleClickSec() {
    setBankDetailThird(true)
    setBankDetailSec(false)
  }
  function handleClickThird() {
    setAccountConfirm(true)
    setBankDetailThird(false)
  }
  function handleListing() {
    setAccountConfirm(false)
    setAccountListing(true)
  }

  return (
    <>
      {accountListing && (
        <div className="flex flex-col gap-3">
          <AccountDetailCard
            name="ABCBank"
            accountNo="#############"
            iban=" - - - - - - - - - -"
          />
          <AccountDetailCard
            name="ABCBank"
            accountNo="#############"
            iban=" - - - - - - - - - -"
          />
        </div>
      )}
      {bankDetail && (
        <div className="mt-8">
          <div>Select Conutry</div>
          <input className="border-2 px-2 mt-2  py-2 w-full rounded-lg outline-0 shadow-lg" />
          <div className="mt-4">Bank Name</div>
          <input
            placeholder="Select bank"
            className="border-2 px-2 mt-2  py-2 w-full rounded-lg outline-0 shadow-lg"
          />
          <div className="mt-4">IBAN no</div>
          <div className="flex flex-col items-center">
            <input
              placeholder="Enter IBAN no"
              className="border-2 px-2 mt-2  py-2 w-full rounded-lg outline-0 shadow-lg"
            />
            <button
              onClick={handleClick}
              className="text-lg text-white bg-[#02AFF3] p-4 text-center rounded-[20px] w-[300px]  mt-7"
            >
              Save
            </button>
          </div>
        </div>
      )}
      {bankDetailSec && (
        <div className="mt-8">
          <div>Select Conutry</div>
          <input className="border-2 px-2 mt-2  py-2 w-full rounded-lg outline-0 shadow-lg" />
          <div className="mt-4">Bank Name</div>
          <input
            placeholder="Select bank"
            className="border-2 px-2 mt-2  py-2 w-full rounded-lg outline-0 shadow-lg"
          />
          <div className="mt-4">Account No</div>
          <input
            placeholder="Enter Account No"
            className="border-2 px-2 mt-2  py-2 w-full rounded-lg outline-0 shadow-lg"
          />
          <div className="mt-4">BSB Code</div>
          <div className="flex flex-col items-center">
            <input
              placeholder="Enter BSB Code"
              className="border-2 px-2 mt-2  py-2 w-full rounded-lg outline-0 shadow-lg"
            />
            <button
              onClick={handleClickSec}
              className="text-lg text-white bg-[#02AFF3] p-4 text-center rounded-[20px] w-[300px]  mt-7"
            >
              Save
            </button>
          </div>
        </div>
      )}
      {bankDetailThird && (
        <div className="mt-8">
          <div>Select Conutry</div>
          <input
            placeholder="USA"
            className="border-2 px-2 mt-2  py-2 w-full rounded-lg outline-0 shadow-lg"
          />
          <div className="mt-4">Bank Name</div>
          <input
            placeholder="Select bank"
            className="border-2 px-2 mt-2  py-2 w-full rounded-lg outline-0 shadow-lg"
          />
          <div className="mt-4">Account No</div>
          <input
            placeholder="Enter Account No"
            className="border-2 px-2 mt-2  py-2 w-full rounded-lg outline-0 shadow-lg"
          />
          <div className="mt-4">ACH / Routine number</div>
          <div className="flex flex-col items-center">
            <input
              placeholder="Enter ACH / Routine number"
              className="border-2 px-2 mt-2  py-2 w-full rounded-lg outline-0 shadow-lg"
            />
            <button
              onClick={handleClickThird}
              className="text-lg text-white bg-[#02AFF3] p-4 text-center rounded-[20px] w-[300px]  mt-7"
            >
              Save
            </button>
          </div>
        </div>
      )}
      {accountConfirm && <AccountConfirmation handleListing={handleListing} />}
    </>
  )
}
