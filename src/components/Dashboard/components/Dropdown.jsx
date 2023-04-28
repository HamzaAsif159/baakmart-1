import Select from "react-select"
import { useState } from "react"

const options = [
  { label: "Last 30 days", value: "Last 30 days" },
  { label: "Last 15 days", value: "Last 15 days" },
  { label: "Last week", value: "Last week" },
  { label: "Last day", value: "Last day" },
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
  const [selected, setSelected] = useState("Last 30 days")

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
        className="custom-select text-black mt-4 md:mt-0 md:w-4/5 "
        onChange={(e) => selectChange(e)}
        value={selected}
        menuPosition="fixed"
      />
    </>
  )
}

export default Dropdown
