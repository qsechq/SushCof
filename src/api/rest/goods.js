import { makeRequest } from '../requests'

export const getGoods = () => makeRequest({
  url: '/products.php'
})

