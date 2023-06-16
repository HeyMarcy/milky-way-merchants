"use client";
import Image from "next/image";
import { Agent } from "@spacejunk/airlock";

export default function AgentCard({
  symbol,
  headquarters,
  credits,
  startingFaction,
  accountId,
}: Agent) {
  return (
    <div className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer bg-slate-100'>
      <Image
        src='https://static.scientificamerican.com/sciam/cache/file/B73C6A04-9155-44EC-B80AA2B5E9E62508_source.jpg?w=2000&h=1123&39453E69-0AF5-4ABA-9ED0C22CEBCB1FB3'
        width='663'
        height='663'
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        alt='hero image'
        className='w-full h-36'
      />
      <div className='p-1 text-gray-800'>
        <h3 className='font-bold text-2xl mb-2'>{symbol}</h3>
        <div className='flex items-start'>
          <div className='flex mb-2'>{accountId}</div>
          <p className='ml-2'>{startingFaction}</p>
        </div>
        <div className='flex text-md font-light capitalize'>
          <p className=' mr-3'>Credits</p>
          <p className='mr-3'>{credits}</p>
        </div>
        <div className='flex text-md font-light capitalize'>
          <p className=' mr-3'>Headquarters:</p>
          <p className='mr-3'>{headquarters}</p>
        </div>
      </div>
    </div>
  );
}
