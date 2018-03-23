<template>
<list :listItems="listItems"></list>
</template>

<script>
import List from './List.vue'
import {itemsRef} from '../firebase'
import {itemsRefByDate} from '../firebase'

export default {
  components: {
    List
  },
  props: ['store'],
  data() {
    return {
    listItems: []
    }
  },
  methods: {
    setList(){
      this.$bindAsArray('listItems', itemsRefByDate.orderByChild(this.store).equalTo(true))
    }
  },
  mounted() {
    this.setList()
  }
}
</script>