import axios from 'axios'

const headers = {
  Authorization: import.meta.env.VITE_SECRET_KEY
}

export async function get(path: string) {
  return axios.get(path, { headers })
}

export async function post(path: string, body: any) {
  return axios.post(path, body, { headers })
}

export async function del(path: string) {
  return axios.delete(path, { headers })
}
