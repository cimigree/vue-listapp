<template>
  <div>
    <ul class="nav nav-tabs">
    <router-link  v-for="store in stores" :to="`/list/${store.value}`" tag="li" class="nav-item" exact :key="store.value"><a class="nav-link" active-class="active">{{store.name}}</a></router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stores: [{name: 'Giant Eagle', value: 'gianteagle'}, {name: 'Target', value:'target'}, {name: "Trader Joes", value: 'traderjoes'}, {name: 'Rite Aid', value:'riteaid'}, {name: "Michaels", value: 'michaels'}, {name: 'Lowes', value: 'lowes'}, {name: 'Staples', value: 'staples'}, {name: 'Other', value: 'other'}],
    }
  }
}
</script>
<style>
</style>