import * as api from '../../api'

export default {
    namespaced: true,
    state: {
        goods: [],
        quantity: '',
        
    },
    mutations: {
        SET_GOODS(state, payload) {
            state.goods = payload
        },
        SET_QUANTITY(state, quantity) {
            state.quantity = quantity;
        },
    },
    actions: {
        async getGoods({ commit }) {
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
