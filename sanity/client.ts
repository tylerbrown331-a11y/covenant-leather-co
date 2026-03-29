import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "g3ey8k4o",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
