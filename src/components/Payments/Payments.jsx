import React from "react"
import { useNavigate } from "react-router-dom"
import TabUnstyled from "@mui/base/TabUnstyled"
import TabsListUnstyled from "@mui/base/TabsListUnstyled"
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled"
import TabsUnstyled from "@mui/base/TabsUnstyled"
//local imports
import ConfirmTransaction from "./components/TransactionHistory/ConfirmTransaction"
import BankAccount from "./components/BankAccount/BankAccout"
import PayPalAccount from "./components/PayPalAccount/PayPalAccount"

export default function Payments() {
  return (
    <div className="w-full md:w-4/6 mt-4 ">
      <h1 className="font-bold text-xl md:text-2xl">Payments</h1>
      <p className="text-[#C7C7CC]">
        Your payable commission will be show here
      </p>
      <hr className="border-blue-dark mt-4 mb-6" />
      <TabsUnstyled defaultValue={0}>
        <TabsListUnstyled className="flex gap-2 mdgap-4">
          <TabUnstyled className="bg-blue-dark text-white px-4 py-2 rounded-md cursor-pointer">
            Commission Transaction History
          </TabUnstyled>
          <TabUnstyled className="bg-blue-dark text-white px-4 py-2 rounded-md cursor-pointer">
            Bank Account
          </TabUnstyled>
          <TabUnstyled className="bg-blue-dark text-white px-4 py-2 rounded-md cursor-pointer">
            PayPal Account
          </TabUnstyled>
        </TabsListUnstyled>
        <TabPanelUnstyled value={0}>
          <ConfirmTransaction />
        </TabPanelUnstyled>
        <TabPanelUnstyled value={1}>
          <BankAccount />
        </TabPanelUnstyled>
        <TabPanelUnstyled value={2}>
          <PayPalAccount />
        </TabPanelUnstyled>
      </TabsUnstyled>
    </div>
  )
}
