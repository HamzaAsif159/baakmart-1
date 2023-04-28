import React from "react"
import deleteIcon from "../../assets/deleteIcon.png"
import editIcon from "../../assets/editIcon.png"

export default function AccountDetailCard({ name, accountNo, iban }) {
  return (
    <div className="w-full bg-white shadow-lg p-4 rounded-lg py-6 my-4 md:flex justify-between items-center">
      <div>
        <div>
          Bank Name: <strong>{name}</strong>
        </div>
        <div>
          Account No:<strong>{accountNo}</strong>
        </div>
        <div>
          IBAN:<strong>{iban}</strong>
        </div>
      </div>
      <div className="flex gap-1 md:gap-2 py-4 md:py-0">
        <img src={editIcon} alt="edit-icon" className="cursor-pointer" />
        <img src={deleteIcon} alt="delete-icon" className="cursor-pointer" />
      </div>
    </div>
  )
}
