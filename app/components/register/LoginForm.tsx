"use client";
import React, { useRef } from "react";
import { RegisterRequest } from "@spacejunk/airlock";

const registerAgent = async (symbol: string, faction: string) => {
  const response = await fetch("https://api.spacetraders.io/v2/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      symbol,
      faction,
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
};

function LoginForm() {
  const symbolInputRef = useRef<HTMLInputElement | null>(null);
  const factionInputRef = useRef<HTMLInputElement | null>(null);

  async function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    const symbolInput: string =
      symbolInputRef?.current?.value !== undefined
        ? symbolInputRef?.current?.value
        : "";
    const factionInput: string =
      factionInputRef?.current?.value !== undefined
        ? factionInputRef?.current?.value
        : "";
    try {
      const result = await registerAgent(symbolInput, factionInput);
      console.log("result", result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className='card-body'>
        <form onSubmit={submitHandler}>
          <div>
            <label>
              Agent Symbol:
              <input
                className='input w-full max-w-xs'
                type='text'
                ref={symbolInputRef}
              />
            </label>
          </div>
          <div>
            <label>
              Faction:
              <input className='input w-full max-w-xs' ref={factionInputRef} />
            </label>
          </div>
          <button className='button' type='submit'>
            Register Agent
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
