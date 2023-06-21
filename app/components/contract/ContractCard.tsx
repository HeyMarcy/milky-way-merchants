import { Contract } from "@/types/contract";
import Image from "next/image";
import { readableDate, numberWithCommas } from "@/utils/utils";

export default async function ContractCard() {
  const getAgentDataResponse = await fetch(
    "https://api.spacetraders.io/v2/my/contracts",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
      next: { revalidate: 10 },
    }
  );

  const { data } = await getAgentDataResponse.json();
  const contract = data[0];

  const {
    id,
    type,
    terms,
    factionSymbol,
    accepted,
    fulfilled,
    expiration,
    deadlineToAccept,
  }: Contract = contract;

  const { deadline, payment, deliver } = terms;
  const { onAccepted, onFulfilled } = payment;
  const { tradeSymbol, destinationSymbol, unitsRequired, unitsFulfilled } =
    deliver[0];

  console.log(contract, "contract");

  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className='card-body'>
        <div className='card-body'>
          <h2 className='card-title'>
            Contract in {factionSymbol}
            {/* <div className='badge badge-secondary'>NEW</div> */}
          </h2>

          <div className='grid grid-cols-[150px_1fr] '>
            <p>Type:</p>
            <p>{type}</p>
            <p className='col-span-2'>Terms</p>
            {/* <span className='grid grid-cols-[1fr_2fr]'> */}
            <p>Deadline:</p>
            <p>{readableDate(deadline)}</p>
            <p>Payment:</p>
            <span>
              <p>onAccepted: {numberWithCommas(onAccepted)}</p>
              <p>onFulfilled: {numberWithCommas(onFulfilled)}</p>
            </span>

            <p>Deliver:</p>
            <span>
              <p>Trade Symbol: {tradeSymbol}</p>
              <p>Destination Symbol: {destinationSymbol}</p>
              <p>Units Required: {unitsRequired}</p>
              <p>Units Fulfilled: {unitsFulfilled}</p>
            </span>
            <p>Accepted:</p>
            <p>{accepted ? "yes" : "no"}</p>
            <p>Fulfilled:</p>
            <p>{fulfilled ? "yes" : "no"}</p>
            <p>deadlineToAccept:</p>
            <p>{readableDate(deadlineToAccept)}</p>

            <p>expiration:</p>
            <p>{readableDate(expiration)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
