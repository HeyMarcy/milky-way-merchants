import { Agent } from "../types/types";

import AgentCard from "./components/AgentCard";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
};

const getAgent = async (): Promise<Agent> => {
  const data = await fetch("https://api.spacetraders.io/v2/my/agent", options);
  if (!data.ok) {
    throw new Error("Something went wrong!");
  }
  const agentData = await data.json();
  return agentData;
};

export default async function Home() {
  const data = await getAgent();
  console.log(data);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <AgentCard
          accountId={data.accountId ?? "Account ID"}
          symbol={data.symbol}
          headquarters={data.accountId}
          credits={data.credits ?? 0}
          startingFaction={data.startingFaction}
        />
      </div>
    </main>
  );
}
