import axios from 'axios'

const baseURL = 'https://dev-su.eda1.ru/test_task'

export const makeRequest = ({
  url, method = 'get', data = {}, headers = {}
}) => axios({
  url,
  method,
  data,
  baseURL,
  headers
})
