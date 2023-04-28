import { HiArrowTrendingUp, HiArrowTrendingDown } from "react-icons/hi2"
import Card from "./Card"
const data = [
  {
    heading: "Commission",
    quantity: "$ 3.15",
    displayHikes: true,
    hike: true,
    amountHike: 12.6,
  },
  {
    heading: "Number of clicks",
    quantity: "2,000",
    displayHikes: true,
    hike: false,
    amountHike: 1.6,
  },
  {
    heading: "Registered Sellers",
    quantity: "12000",
    displayHikes: true,
    hike: true,
    amountHike: 12.6,
  },
  { heading: "Registered agencies", quantity: "120" },
  { heading: "Booked Monthly Slots", mode: "Paid", quantity: "160" },
  { heading: "Paused Baak Slots", quantity: "0" },
  { heading: "Approved Baak Slots", mode: "Monthly", quantity: "120" },
  {
    heading: "Cancelled Baak Slots",
    quantity: "40",
    displayHikes: true,
    hike: false,
    amountHike: 0.6,
  },
  {
    heading: "Total Sales of Baak Slots",
    mode: "Approved",
    quantity: "0",
    displayHikes: true,
    hike: true,
    amountHike: 0,
  },
  {
    heading: "Total Sales of Baak Slots",
    mode: "Not Approved",
    quantity: "0",
    displayHikes: true,
    hike: true,
    amountHike: 0,
  },
  {
    heading: "Monthly Commission",
    mode: "Not Payable",
    quantity: "0",
    displayHikes: true,
    hike: true,
    amountHike: 0,
  },
  {
    heading: "Monthly Commission",
    mode: "Not Payable",
    quantity: "0",
    displayHikes: true,
    hike: true,
    amountHike: 0,
  },
]

const cards = data.map((card) => (
  <Card
    heading={card.heading}
    quantity={card.quantity}
    hike={card.hike}
    amountHike={card.amountHike}
    displayHikes={card.displayHikes}
    mode={card.mode}
  />
))

function StatsCards(props) {
  return <div className="md:flex flex-wrap gap-3 items-normal">{cards}</div>
}

export default StatsCards
