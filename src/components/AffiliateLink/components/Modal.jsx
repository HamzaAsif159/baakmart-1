import { AiOutlineClose } from "react-icons/ai"

export default function Modal({ hideModal, show, children }) {
  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } bg-[#000000] fixed md:-ml-5 md:-mb-2 md:-mt-6 overscroll-none overflow-hidden  w-full h-screen`}
    >
      <div
        className={`${
          show ? "block" : "hidden"
        } bg-white w-full md:w-[481px] overscroll-none h-screen md:h-fit  p-5 z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[20px]`}
      >
        <AiOutlineClose
          onClick={hideModal}
          className="cursor-pointer float-right"
          size={20}
        />
        <p className="text-xl font-bold mb-8">Create Affiliate Link</p>
        <p className="mb-2">BaakMart Link name</p>
        <input
          placeholder="Enter link name"
          type="text"
          className="border-2 w-full px-2 py-2 rounded-[20px] outline-0 mb-6"
        />
        <p className="mb-2">Link description</p>
        <input
          placeholder="Write here"
          type="text"
          className="border-2 w-full px-2 py-2 rounded-[20px] outline-0 mb-6"
        />
        <button className="text-md text-white bg-[#02AFF3] p-3 md:p-4  text-center rounded-[20px] w-full mt-3  md:mt-7">
          Create Link
        </button>
      </div>
    </div>
  )
}
