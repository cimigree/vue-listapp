<template>
<list :listItems="listItems"></list>
</template>

<script>
import List from './List.vue'
import {itemsRef} from '../firebase'

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
  firebase: {
    listItems: itemsRef 
  }
}
</script>