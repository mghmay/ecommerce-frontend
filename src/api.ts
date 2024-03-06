import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
})

const headers = {
  Authorization: import.meta.env.VITE_SECRET_KEY
}

export async function get(path: string) {
  const toReturn = await instance.get(path, { headers })
  console.log(toReturn)
  return toReturn
}

export async function post(path: string, body: any) {
  return instance.post(path, body, { headers })
}

export async function del(path: string) {
  return instance.delete(path, { headers })
}
