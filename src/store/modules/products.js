import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    products: []
  },
  mutations: {
    SET_GOODS (state, payload) {
      state.goods = payload
    },
  },
  actions: {
    async getGoods ({ commit }) {
      try {
        const { data } = await api.goods.getGoods()
        if (data.success === true) {
            commit('SET_GOODS', data)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
