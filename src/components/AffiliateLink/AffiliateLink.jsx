import { useState } from "react"
import LinkCard from "./components/LinkCard"
import Modal from "./components/Modal"

export default function AffiliateLink() {
  const [show, setShow] = useState(false)

  function showModal() {
    setShow(true)
  }

  function hideModal() {
    setShow(false)
  }
  return (
    <>
      {/*
      <------------IN CASE WE DONT HAVE LINKS--------------------->
      <div className="flex flex-col justify-center w-full md:w-4/6 h-screen mt-6">
        <div className="flex items-center justify-between">
          <h1 className="mb-5 font-bold md:text-2xl">Affiliate links</h1>
          <p
            className="cursor-pointer bg-[#02AFF3] text-sm rounded-[8px] p-1 text-center text-white"
            onClick={showModal}
          >
            Create Affiliate Link
          </p>
        </div>
        <p className="text-[#C7C7CC]">
          You can generate new links and create list
        </p>
        <hr className="mt-4 mb-6 border-light" />
        <div className="w-3/5 m-auto text-center">
          <p className="px-5 text-xl font-bold">No link created yet!</p>
          <p className="px-5 text-base font-medium">
            This section will contain the all link list that you will create
          </p>
          <button
            className=" text-center rounded-[20px] text-white bg-[#02AFF3] p-4 mt-7 w-full"
            onClick={showModal}
          >
            Create Affiliate Link
          </button>
        </div>
      </div>
      <Modal showModal={showModal} hideModal={hideModal} show={show} />
      */}

      <div className="w-full md:w-4/6 h-screen mt-6">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xl md:text-2xl">Affiliate links</h1>
          <p
            className="cursor-pointer bg-[#02AFF3] text-sm rounded-[8px] p-2 font-semibold text-center text-white"
            onClick={showModal}
          >
            Create Affiliate Link
          </p>
        </div>
        <hr className="border-blue-dark mt-4 mb-6" />
        <div className="flex flex-col gap-6">
          {/**cards go here */}
          <LinkCard
            no="1"
            name="Facebook"
            url="https://www.BaakMart.com/affiliate1"
            desc="Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in, semper gravida enim."
          />
          <LinkCard
            no="1"
            name="Facebook"
            url="https://www.BaakMart.com/affiliate1"
            desc="Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in, semper gravida enim."
          />
          <LinkCard
            no="1"
            name="Facebook"
            url="https://www.BaakMart.com/affiliate1"
            desc="Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in, semper gravida enim."
          />
        </div>
      </div>
      <Modal showModal={showModal} hideModal={hideModal} show={show} />
    </>
  )
}
