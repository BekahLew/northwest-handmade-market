import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skQWrpYluvRFCDwmdqLOYpDF5injRxi0A6gGt3GO7URcIXLoKJPWPTd9rkzB7QppggEpvBbmBUR0iTF80bozrNSAaURpCbkWBqtx3nA9AeJqQuOXm53j6ZAC6CW9ZD3uhAr0Yi8rP0EDAV4T3PIsUJOPc2siAbHKl6HYXSjwNggTUofgPLtc",
})
