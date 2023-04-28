import Dashboard from "./components/Dashboard/Dashboard"
import { Route, Routes } from "react-router-dom"
//local imports
import "./App.css"
import MobileView from "./components/MobileView"
import Sidebar from "./components/Sidebar"
import Payments from "./components/Payments/Payments"
import PromotionalCode from "./components/PromotioalCode/PromotionalCode"
import AffiliateLink from "./components/AffiliateLink/AffiliateLink"
import EmailTemplates from "./components/EmailTemplates/EmailTemplates"
import EmailTemplate from "./components/EmailTemplate/EmailTemplate"
import Contact from "./components/Contact/Contact"
import Agreement from "./components/Agreement/Agreement"
import AccountSetting from "./components/AccountSetting/AccountSetting"
import AfilliateLinkReport from "./components/AfilliateLinkReport/AffiliateLinkReport"

function App() {
  return (
    <>
      <MobileView />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/promotion-code" element={<PromotionalCode />} />
        <Route path="/affiliate-links" element={<AffiliateLink />} />
        <Route path="/affiliate-email-templates" element={<EmailTemplates />} />
        <Route path="/email-template" element={<EmailTemplate />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/account-setting" element={<AccountSetting />} />
        <Route
          path="/affiliate-link-report"
          element={<AfilliateLinkReport />}
        />
      </Routes>
    </>
  )
}

export default App
