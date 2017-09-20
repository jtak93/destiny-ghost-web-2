import { create } from 'apisauce'
//todo: move sensitive stuff
export const api = create({
  baseURL: 'https://bungie.net/Platform',
  headers: {
    'X-API-KEY': 'fed6dda8d95343d88323bde6c5a922ed',
  }
})
