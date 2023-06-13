import { Configuration, FleetApi } from "@spacejunk/airlock";

export const config = new Configuration({
  accessToken: process.env.TOKEN,
});

export const getAgent = async () => {
  const agent = new AgentsApi(config);
  const { data } = await agent.getMyAgent();
  return data;
};

export const getShips = async () => {
  const fleet = new FleetApi(config);
  try {
    const { data } = await fleet.getMyShips();
    return data;
  } catch (error) {
    console.error(error);
  }
};
