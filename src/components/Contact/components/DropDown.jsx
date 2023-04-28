import Select from "react-select"
import { useState } from "react"

const options = [
  { label: "Agency Registration", value: "Agency Registration" },
  { label: "Seller Registration", value: "Seller Registration" },
  { label: "Booking a Baak Slot", value: "Booking a Baak Slot" },
  { label: "Baak Slot Payment", value: "Baak Slot Payment" },
  { label: "Baak Slot Cancellation", value: "Baak Slot Cancellation" },
  { label: "Affiliate Approvement", value: "Affiliate Approvement" },
  { label: "Affiliate Links", value: "Affiliate Links" },
  { label: "Other", value: "Other" },
]

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "none",
    borderColor: "none",
    borderRadius: "none",
    boxShadow: "none",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight: "10px",
    paddingLeft: "10px",
    borderRadius: "20px",
    boxShadow: "0px 0px 20px #C4C8D066",
  }),
  option: (provided) => ({
    ...provided,
    backgroundColor: "white",
    color: "black",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "#02AFF3",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  placeholder: () => ({
    color: "black",
    fontWeight: "bold",
  }),
}

function Dropdown(props) {
  const [selected, setSelected] = useState("Agency Registration")

  function selectChange(e) {
    setSelected(e.value)
    console.log(e)
  }
  return (
    <>
      <Select
        styles={customStyles}
        options={options}
        placeholder={selected}
        className="custom-select text-black mt-4 md:mt-0"
        onChange={(e) => selectChange(e)}
        value={selected}
        menuPosition="fixed"
      />
    </>
  )
}

export default Dropdown
