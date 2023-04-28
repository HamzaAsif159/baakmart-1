import React from "react"

export default function Stats(props) {
  return (
    <div className="text-center text-sm md:text-md mt-4 md:mt-0 bg-gray flex gap-2 w-full self-center">
      <span>Stat's interval: </span>
      <p className="font-bold">{props.text}</p>
    </div>
  )
}
