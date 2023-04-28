import { HiArrowTrendingUp, HiArrowTrendingDown } from "react-icons/hi2"

function Card(props) {
  return (
    <div className="text-center bg-white drop-shadow-lg p-5 rounded-[20px] flex flex-col my-4 md:my-0 md:w-[30%] ">
      <p className="font-bold text-xl whitespace-nowrap">{props.heading}</p>
      <div className="border-b-2 border-statsCard-divider w-4/5 m-auto my-3"></div>
      {props.mode && <p className="text-arrow-blue">{props.mode}</p>}
      <p className="text-2xl mb-3">{props.quantity}</p>
      {props.displayHikes && (
        <div className="justify-self-start ml-5 flex items-center gap-2 font-bold">
          {props.hike === true ? (
            <HiArrowTrendingUp
              className={`${
                props.amountHike !== 0 ? "text-arrow-blue" : "text-green-400"
              } text-2xl`}
            />
          ) : (
            <HiArrowTrendingDown className="text-2xl text-red-400" />
          )}
          {
            <p
              className={`${
                props.hike && props.amountHike !== 0
                  ? "text-arrow-blue"
                  : props.amountHike == 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {props.amountHike} %
            </p>
          }
        </div>
      )}
    </div>
  )
}

export default Card
