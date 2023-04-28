export default function PromotionalCode() {
  return (
    <div className="mt-6 w-full md:w-4/6">
      <h1 className="font-bold text-xl md:text-2xl">Promotional Code</h1>
      <p className="text-[#C7C7CC]">Create discount code</p>
      <hr className="border-blue-dark mt-4 mb-6" />
      <p className="text-[#13223F] text-lg font-medium mb-[14px]">
        Discount code
      </p>
      <input
        type="text"
        className="border-2 p-2 w-full rounded-[20px] outline- shadow-sm"
      />
      <button className="text-xl text-white bg-[#02AFF3] p-4 text-center rounded-[20px] w-full mt-7">
        Copy Code
      </button>
      <div className="flex mt-8">
        <p className="font-bold text-lg">NOTE:</p>
        <p className="text-lg font-medium ml-5">
          The discount value is 5% It expires automatically in the end of 2026
        </p>
      </div>
    </div>
  )
}
