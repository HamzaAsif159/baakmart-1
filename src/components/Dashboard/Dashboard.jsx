import Dropdown from "./components/Dropdown"
import Stats from "./components/Stats"
import StatsCards from "./components/StatsCards"
import TotalBal from "./components/TotalBal"

function Dashboard(props) {
  return (
    <div className="flex flex-col h-screen w-full md:w-4/6">
      <div className="w-full md:flex gap-6 mb-10 ">
        <Dropdown />
        <Stats text={"01 Jan 2023 - 01 Feb 2023"} />
      </div>
      <StatsCards />
      <TotalBal />
    </div>
  )
}

export default Dashboard
