const API_URL = 'https://device-issue-api.onrender.com/devices';

const getDevices = async () => {

  const response = await fetch(API_URL)
  const data = await response.json()

  return data
}

const getDevice = async (id) => {
  const response = await fetch(`${API_URL}/${id}`)
  const data = await response.json()

  return data
}

export { getDevices, getDevice }
