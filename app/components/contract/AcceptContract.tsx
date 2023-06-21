import React from "react";

export default async function AcceptContract(contractId: Number) {
  const getAgentDataResponse = await fetch(
    `https://api.spacetraders.io/v2/my/contracts/${contractId}/accept`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
      next: { revalidate: 10 },
    }
  );
  return <div></div>;
}
