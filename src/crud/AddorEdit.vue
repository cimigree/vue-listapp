<template>
<div class="container-fluid">
		<header class="row d-flex align-items-center">
			<div class="col-sm-6">
				<h1 class="h3 display">{{ formAction }} Item</h1>
			</div>
		</header>
    <form>
        <div class="form-group">
          <label>Item Name</label>
          <input class="form-control" type="text" v-model="listItem.name">
          </div>
        <div class="form-group">
          <label>Brand Name</label>
          <input class="form-control" type="text" v-model="listItem.brandName">
        </div>
        <div class="form-group">
          <label>Quantity</label>
          <input class="form-control" type="text" v-model="listItem.quantity">
        </div>
        <div class="form-group">
          <label>Store: </label>
          <input type="checkbox" v-model="listItem.gianteagle">
            <label for="gianteagle">Giant Eagle</label>
          <input type="checkbox" v-model="listItem.target">
            <label for="target">Target</label>
          <input type="checkbox" v-model="listItem.traderjoes">
            <label for="traderjoes">Trader Joe's</label>
          <input type="checkbox" v-model="listItem.riteaid">
            <label for="riteaid">Rite Aid</label>
          <input type="checkbox" v-model="listItem.staples">
            <label for="staples">Staples</label>
          <input type="checkbox" v-model="listItem.lowes">
            <label for="lowes">Lowes</label>
          <input type="checkbox" v-model="listItem.michaels">
            <label for="michaels">Michaels</label>
          <input type="checkbox" v-model="listItem.other">
            <label for="other">Other</label>
          <!-- <select
	          class="form-control" 
            v-model="listItem.selectedStores" multiple>
	          <option v-for="(store, key, index) in stores" :key="index" :selected="store=='Giant Eagle'" :value="true">{{store.name}}</option>
          </select> -->
        </div>
        <div class="form-group"> Coupon?
          <label for="Yes">
	          <input
	            type="radio"
	            value="True"
	            v-model="listItem.coupon"> Yes</label>
          <label for="No">
	          <input
	            type="radio"
	            value="False"
	            v-model="listItem.coupon"> No</label>
        </div>
        <div class="form-group">
          <label>Category</label>
          <input class="form-control" type="text" v-model="listItem.category">
        </div>
        <div class="form-group">
          <label>Note</label>
          <textarea class="form-control" type="text" rows="3" v-model="listItem.note"></textarea>
        </div>
        <div class="form-group">
          <label>Frequency</label>
          <select
	          class="form-control" 
            v-model="listItem.selectedFrequency">
	          <option v-for="f in frequency" :key="f" :selected="f=='weekly'">{{f}}</option>
          </select>
        </div>
        <button class="btn btn-success" @click.prevent="submit">{{formButton}}</button>
        <button class="btn btn-danger" @click.prevent="cancel">Cancel</button>
    </form>
  </div>
</template>

<script>
  import {itemsRef} from '../firebase'
  export default {
    props: ['id'],
    data() {
      return {
        listItems: [],
        formAction: 'New',
        formButton: 'Save',
        listItem: {
        },
        stores: [{name: 'Giant Eagle', value: 'gianteagle'}, {name: 'Target', value:'target'}, {name: "Trader Joes", value: 'traderjoes'}, {name: 'Rite Aid', value:'riteaid'}, {name: "Michaels", value: 'michaels'}, {name: 'Lowes', value: 'lowes'}, {name: 'Staples', value: 'staples'}, {name: 'Other', value: 'other'}],
         frequency: ['weekly', 'bi-weekly', 'monthly', 'as-needed'],
      };
    },
    firebase: {
      listItems: itemsRef
    },
    methods: {
      submit() {
        this.listItem.date=Date.now();
        if(this.id == undefined) {
          this.createItem()
        } else {
          this.updateItem()
        }
      },
      cancel() {
        this.$router.push({path: '/list'});
      },
      createItem() {
        itemsRef.push(this.listItem);
        this.redirectToList()
      },
      updateItem() {
        const key = this.listItem['.key'];
        const copy = {...this.listItem};
   // remove the .key attribute
        delete copy['.key']
        itemsRef.child(key).set(copy);
        this.redirectToList();
      },
      redirectToList() {
        this.resetItem();
        this.$router.push('/list');
      },
      resetItem() {
        this.listItem = {           
            name: '',
            brandName: '',
            quantity: '',
            selectedStores: {
            },
            coupon: false,
            category: '',
            note: '',
            selectedFrequency: '',
            checked: false,
            date: ''
             }
      },
      loadItem() {
        this.listItem = this.listItems[this.id];
        this.formAction = 'Edit';
        this.formButton = 'Update';
      },
    },
    created() {
      this.resetItem()
      if(this.$route.params.id != undefined ) {
      this.loadItem()
      }
    }
  }
</script>