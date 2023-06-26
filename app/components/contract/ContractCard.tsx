import Image from "next/image";
import { readableDate, numberWithCommas } from "@/utils/utils";
import { getContracts } from "@/app/api";
import { Contract } from "@spacejunk/airlock";
import { Countdown } from "@/client/Countdown";
import AcceptContract from "./AcceptContract";

export default async function ContractCard() {
  const data = await getContracts();
  console.log("getMyContracts", data);
  // TODO: iterate through array
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

  console.log(data, "data");

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
              {contract.terms.deliver?.map((item, index) => (
                <div key={index} className='mb-2'>
                  <p className='text-sm'>Trade Symbol: {item.tradeSymbol}</p>
                  <p className='text-sm'>
                    Destination: {item.destinationSymbol}
                  </p>
                  <p className='text-sm'>
                    Units required: {item.unitsRequired}
                  </p>
                  <p className='text-sm'>
                    Units fulfilled: {item.unitsFulfilled}
                  </p>
                </div>
              ))}
            </span>
            <p>Accepted:</p>
            <p>{accepted ? "yes" : "no"}</p>
            <p>Fulfilled:</p>
            <p>{fulfilled ? "yes" : "no"}</p>
            <p>deadlineToAccept:</p>
            <p>{deadlineToAccept ? readableDate(deadlineToAccept) : null}</p>

            <p>expiration:</p>
            <p>{readableDate(expiration)}</p>
          </div>
          {!contract.accepted && <AcceptContract id={id} />}
          <p className='text-sm mb-2'>
            Fulfilled: {contract.fulfilled ? "Yes" : "No"}
          </p>
          <p className='text-sm mb-2'>
            Expiration: <Countdown targetDate={expiration} />
          </p>
        </div>
      </div>
    </div>
  );
}
