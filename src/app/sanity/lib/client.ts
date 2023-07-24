import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:apiVersion,
  dataset:dataset,
  projectId:projectId,
  useCdn:useCdn,
  token:process.env.API_TOKEN,
})


