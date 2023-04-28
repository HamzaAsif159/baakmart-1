import React from "react"
import TransactionConfirmCard from "./TransactionConfirmCard"

export default function ConfirmTransaction() {
  return (
    <div className="flex flex-col gap-5 mt-4">
      <TransactionConfirmCard id="34" amount="33" />
      <TransactionConfirmCard id="34" amount="33" />
      <TransactionConfirmCard id="34" amount="33" />
    </div>
  )
}
