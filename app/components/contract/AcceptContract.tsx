"use client";
import React from "react";
import Button from "@/client/button";
import { Contract } from "@spacejunk/airlock";
import { acceptContract } from "@/app/api";

export default async function AcceptContract(values: { id: string }) {
  const handleAcceptContract = () => acceptContract(values.id);

  return <Button onClick={handleAcceptContract}>Accept Contract </Button>;
}
