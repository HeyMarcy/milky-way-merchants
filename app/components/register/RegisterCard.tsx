import React, { useState } from "react";
import { RegisterRequest } from "@spacejunk/airlock";


type LoginFormProps {
  onSubmit: ({symbol, faction}:RegisterRequest) => void;
}



// const { data } = await getAgentDataResponse.json();
// const { symbol, credits, startingFaction, headquarters }: Agent = data;

// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     symbol: symbolInput,
//     faction: factionInput,
//     email: emailInput ? emailInput : null,
//   }),
// };

// const onRegisterAgent = await fetch(
//   "https://api.spacetraders.io/v2/register",
//   options
// )
  // .then((response) => response.json())
  // .then((response) => {
  //   if (response.error) {
  //     const token = response.data.token;
  //     const symbol = response.data.agent.symbol;

  //     // Save to localStorage
  //     localStorage.setItem(symbol, token);
  //   }
  // })
  // .catch((err) => {
  //   console.error(err);
  // });

export default async function RegisterCard() {
  const asynhandleLogin = (symbol: string, faction: string) => {

  };
  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className='card-body'>
        <div className='card-body'>
          <h2 className='card-title'>Register New Agent</h2>
          <form onSubmit={() => handleSubmit}>
            <label htmlFor='agentSymbolInput'>Agent Symbol</label>
            <input
              id='agentSymbolInput'
              type='text'
              placeholder='Agent Symbol'
              className='input w-full max-w-xs'
            />
            <p className='col-span-2 text-sm'>
              The agent symbol must consist of a 3-14 character string, and will
              be used to represent your agent.{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
