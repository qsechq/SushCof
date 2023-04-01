<template>
    <div class="c-order__left">
        <div class="order__left-wrap">
            <div class="order__left-title">Выберите продукцию</div>
            <select name="order" id="order" class="order__left-select">
                <option v-for="option in goods.products" :value="option.id" :key="option.id" >{{ option.title }}</option>
            </select>
        </div>
        <div class="order__left-wrap">
            <div class="order__left-title">Введите количество</div>
            <input v-model="quantity"  @update:model-value="setQuantity" type="text" class="order__left-input">
        </div>
        <button @click="pushProductInOrder" class="order__left-btn btn">
            Добавить
        </button>
    </div>
</template>

<script lang="js">
import { mapState, mapMutations} from 'vuex'

export default {
    name: 'OrderLeft',
    methods: {
        ...mapMutations({
            setQuantity: 'goods/SET_QUANTITY',
        }),
        pushProductInOrder() {

        }
    },
    computed: {
        ...mapState({
            goods: state => state.goods.goods,
            quantity: state => state.goods.quantity,
        }),
    }
}
</script>

<style lang="scss" src="./order-left.scss" scoped></style>