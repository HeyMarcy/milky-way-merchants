"use client";
import React from "react";
import Button from "@/client/button";
import { Contract } from "@spacejunk/airlock";
import { acceptContract } from "@/app/api";

export default async function AcceptContract(contractId: string) {
  const handleAcceptContract = () => acceptContract(contractId);

  return <Button onClick={handleAcceptContract} />;
}
