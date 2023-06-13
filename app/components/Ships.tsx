"use client";
import { Ship } from "@spacejunk/airlock";

import { getShips } from "../api/route";
import { useQuery } from "@tanstack/react-query";

export const ShipCard = ({ ship }: { ship: Ship }) => {
  const shipSymbol = ship.symbol;

  return (
    <div key={shipSymbol} className='border p-4 m-2'>
      <h2 className='font-bold mb-2'>{ship.registration.name}</h2>
    </div>
  );
};

export const Ships = () => {
  const { data: ships } = useQuery({ queryKey: ["ships"], queryFn: getShips });
  console.log({ ships });

  return (
    <div className='flex flex-col items-center'>
      <h1>Ships</h1>
      <div className='flex flex-wrap'>
        {ships?.map((ship: Ship) => (
          <ShipCard key={ship.symbol} ship={ship} />
        ))}
      </div>
    </div>
  );
};
