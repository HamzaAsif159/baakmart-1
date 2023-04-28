function Stats(props) {
  return (
    <div className="text-center bg-gray flex gap-2 w-full self-center my-2 ml-1 md:ml-0">
      <span>Stat's interval: </span>
      <p className="font-bold">{props.text}</p>
    </div>
  )
}

export default Stats
