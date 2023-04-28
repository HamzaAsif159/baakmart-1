import React from "react"
import Stats from "../Common/Stats"

export default function AfilliateLinkReport() {
  function Details({
    name,
    amount,
    clicks,
    impressions,
    comission,
    status,
    link,
  }) {
    return (
      <>
        <div className="my-4">
          <div className="hidden md:flex items-center justify-around text-sm">
            <div>
              <div>{name}</div>
              <div className="text-blue-dark">{link}</div>
            </div>
            <div>${amount}</div>
            <div>{clicks}</div>
            <div>{impressions}</div>
            <div>${comission}</div>
            <div
              className={
                status === "Approved" ? "text-[#007D08]" : "text-[#FE0002]"
              }
            >
              {status}
            </div>
          </div>
          <div className="md:hidden">
            <div>
              <div>
                <strong>Link Name: </strong>
                {name}
              </div>
              <div className="text-blue-dark">{link}</div>
            </div>
            <div>
              <strong>Amount: </strong>${amount}
            </div>
            <div>
              <strong>Clicks: </strong>${clicks}
            </div>
            <div>
              <strong>Impressions: </strong>${impressions}
            </div>
            <div>
              <strong>Comission: </strong>${comission}
            </div>
          </div>
          <hr className="border-[#13223F]  mt-4 mb-6" />
        </div>
      </>
    )
  }
  return (
    <div className="w-full md:w-4/6 h-screen mt-4">
      <div className="md:flex justify-between items-center">
        <div className="w-full">
          <h1 className="font-bold text-xl md:text-2xl">
            Affiliate Link Report
          </h1>
          <p className="text-[#C7C7CC]  text-sm">
            Track performance all of your affiliate link
          </p>
        </div>
        <Stats text={"01 Jan 2023 - 01 Feb 2023"} />
      </div>
      <hr className="border-blue-dark mt-4 mb-6" />
      <section>
        <div className=" hidden font-semibold text-sm md:flex flex-wrap items-center justify-around mt-8">
          <div>Links name</div>
          <div>Salesamount</div>
          <div>Clicks</div>
          <div>Impressions</div>
          <div>Comission</div>
          <div>Status</div>
        </div>
      </section>
      <section>
        <Details
          name="Facebook"
          link="BaakMart.com/affiliate1"
          clicks="1567"
          amount="3600"
          comission="100"
          impressions="2873"
          status="Approved"
        />
        <Details
          name="Facebook"
          link="BaakMart.com/affiliate1"
          clicks="1567"
          amount="3600"
          comission="100"
          impressions="2873"
          status="Approved"
        />
        <Details
          name="Facebook"
          link="BaakMart.com/affiliate1"
          clicks="1567"
          amount="3600"
          comission="100"
          impressions="2873"
          status="Approved"
        />{" "}
        <Details
          name="Facebook"
          link="BaakMart.com/affiliate1"
          clicks="1567"
          amount="3600"
          comission="100"
          impressions="2873"
          status="Cancelled"
        />
      </section>
    </div>
  )
}
