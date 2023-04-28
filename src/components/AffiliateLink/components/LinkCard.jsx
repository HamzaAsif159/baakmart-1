import React from "react"

export default function LinkCard({ no, url, name, desc }) {
  return (
    <div>
      <h3 className="mb-2">Link {no}</h3>
      <div className="max-w-[900px] shadow-lg p-4 rounded-md bg-white">
        <div className="md:flex justify-between items-center">
          <p>
            URL: <strong className="text-blue-dark">{url}</strong>
          </p>
          <div
            onClick={() => navigator.clipboard.writeText(url)}
            className="cursor-pointer bg-blue-dark my-3 text-white font-bold py-2 px-3 rounded-lg"
          >
            Copy URL
          </div>
        </div>

        <p className="my-3">
          Link Name: <strong>{name}</strong>
        </p>
        <p>Description:</p>
        <p>{desc}</p>
      </div>
    </div>
  )
}
