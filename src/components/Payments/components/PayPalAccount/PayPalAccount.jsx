import React from "react"
import deleteIcon from "../../../../assets/deleteIcon.png"
import editIcon from "../../../../assets/editIcon.png"

export default function PayPalAccount() {
  const [payPalListing, setPayPalListing] = React.useState(false)
  const [details, setDetails] = React.useState(true)

  function handleClick() {
    setPayPalListing(true)
    setDetails(false)
  }

  function PayPalListing({ name, email, no }) {
    return (
      <>
        <div>Account {no}</div>
        <div className="w-full bg-white shadow-lg p-4 rounded-lg py-6 my-4 md:flex justify-between items-center">
          <div>
            <div>
              Display Name: <strong>{name}</strong>
            </div>
            <div>
              PayPal Email:<strong>{email}</strong>
            </div>
          </div>
          <div className="flex gap-1 md:gap-2 py-4 md:py-0">
            <img src={editIcon} alt="edit-icon" className="cursor-pointer" />
            <img
              src={deleteIcon}
              alt="delete-icon"
              className="cursor-pointer"
            />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {details && (
        <div className=" mt-8">
          <div>Display name</div>
          <input
            placeholder="Enter PayPal display name"
            className="border-2 px-2 mt-2  py-2 w-full rounded-lg outline-0 shadow-lg"
          />
          <div className="mt-4">PayPal Email</div>
          <div className="flex flex-col items-center">
            <input
              placeholder="Enter PayPal Email"
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
      {payPalListing && (
        <div className="flex flex-col gap-2 my-6">
          <PayPalListing name="ABC" email="Affiliatepaypall@gmail.com" no="1" />
          <PayPalListing name="ABC" email="Affiliatepaypall@gmail.com" no="1" />
        </div>
      )}
    </>
  )
}
