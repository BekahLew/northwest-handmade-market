import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skZjb6UjepBJk4i1qrUjK6tBpdFIwEWFVFPnjypRR2YuVVVRlq1s6RUjEohdsiANEZcvYbLLIzN7aSiBCtidHHqf8Mtm6FC61FvBKKbFXssEJxMuv1rOgt4306PHYSCij0PIt9F5NAzM7obc1BFoslzTtvIS7pP5iqZDj0Csdh5iYtlMEhW9"
})
