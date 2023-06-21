import { Agent } from "@/types/types";
import Image from "next/image";
import { numberWithCommas } from "@/utils/utils";

export default async function AgentCard() {
  const getAgentDataResponse = await fetch(
    "https://api.spacetraders.io/v2/my/agent",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
      next: { revalidate: false },
    }
  );

  const { data } = await getAgentDataResponse.json();
  const { symbol, credits, startingFaction, headquarters }: Agent = data;
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      {/* <figure>
        <Image
          src='https://static.scientificamerican.com/sciam/cache/file/B73C6A04-9155-44EC-B80AA2B5E9E62508_source.jpg?w=2000&h=1123&39453E69-0AF5-4ABA-9ED0C22CEBCB1FB3'
          width='663'
          height='663'
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          alt='Agent image'
        />
      </figure> */}

      <div className='card-body'>
        <h2 className='card-title'>
          {symbol}
          {/* <div className='badge badge-secondary'>NEW</div> */}
        </h2>

        <div className='grid grid-cols-2 auto-rows-fr'>
          <p>Starting Faction</p>
          <p>{startingFaction}</p>
          <p className=' mr-3'>Headquarters:</p>
          <p className='mr-3'>{headquarters}</p>
          <p className=' mr-3'>Credits</p>
          <p className='mr-3'>{numberWithCommas(credits)}</p>
        </div>
      </div>
    </div>
  );
}
