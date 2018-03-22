<template>
<div>
    <button @click="relocate"> Escape </button>
    <table class="table">
      <tr>
        <th class="thead-light"> Check</th>
        <th class="thead-light"> Item</th>
        <th class="thead-light"> Quantity </th>
        <th class="thead-light"> Notes </th>
        <th class="thead-light"><button @click.prevent="navigateToAdd"><i class="fa fa-plus" aria-hidden="true"></i></button></th>
      </tr>
        <tr v-for="(item, index) in listItems"
            :style="{backgroundColor: setBackground(item)}" 
            :key="index">
          <td> <input
	            type="checkbox"
              value="true"
              v-model="item.checked"> </td>
          <td>{{item.name}}</td>
          <td> {{item.quantity}}</td>
          <td>{{item.note}}</td>
          <td @click.prevent="navigateToEdit(index)"><i class="fa fa-pencil" aria-hidden="true"></i></td>
          <td @click.prevent="deleteItem(index)"><i class="fa fa-trash" aria-hidden="true"></i></td>
        </tr>
    </table>
  </div>
</template>
<script>
import {itemsRef} from '../firebase'

export default {
  props: ['listItems'],
  data() {
    return {
      color: '',
    }
  },
  methods: {
    relocate(){
      location.replace("https://weather.com/")
    },
    setBackground(item){
      if (item.coupon === "True") {
        return this.color='lightseagreen';
      }
      else {
        return this.color=""
      }
    },
    tooltipText(item) {
       return item.brandName
    },
    navigateToAdd() {
      this.$router.push('/item');
    },
    navigateToEdit(id) {
      this.$router.push({path: `/item/${id}`})
    },
    deleteItem(index) {
      const item= this.listItems[index]
      const key = item['.key']
      itemsRef.child(key).remove();
    },
  },
  mounted() {
     $('[data-toggle="tooltip"]').tooltip();
  },
}

</script>
<style scoped>
</style>