import React from "react"

export default function TransactionConfirmCard({ id, amount }) {
  return (
    <div className="max-w-[900px] shadow-md py-3 px-2 bg-white">
      <p>
        Transaction ID: <strong>#{id}</strong>
      </p>
      <p className="my-4">
        Total Amount: <strong>${amount}</strong>
      </p>
      <p>Date:</p>
    </div>
  )
}
