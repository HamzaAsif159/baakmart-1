import Dropdown from "./Dropdown"
import Stats from "../../Common/Stats"
import StatsCards from "./StatsCards"
function Dashboard(props) {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex gap-6 mb-10 ">
        <Dropdown />
        <Stats text={"01 Jan 2023 - 01 Feb 2023"} />
      </div>
      <StatsCards />
    </div>
  )
}

export default Dashboard
