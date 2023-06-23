import { cache } from "react";
// from Next.js Playground
// export const getBaseUrl = cache(() =>
//   process.env.VERCEL_URL
//     ? `https://app-dir.vercel.app`
//     : `http://localhost:${process.env.PORT ?? 3000}`,
// );

export const getBaseUrl = cache(
  () => `http://localhost:${process.env.PORT ?? 3000}`
);
