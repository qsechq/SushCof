<template>
  <header class="header">
    <header-component />
  </header>
  <div class="container">
    <div class="x-order">
      <order-component />
    </div>
  </div>
</template>

<script>
import { HeaderComponent } from '@/components/HeaderComponent'
import { OrderComponent } from '../../components/OrderComponent'
import { mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent, OrderComponent
  },
  methods: {
    ...mapActions({
      getGoods: 'goods/getGoods',
    }),
  },
  async mounted() {
    await this.getGoods()
  }
}
</script>

<style lang="scss" src="./home-view.scss"></style>