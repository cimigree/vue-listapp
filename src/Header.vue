<template>
<ul class="nav nav-pills">
  <router-link to="/" tag="li" class="nav-item" exact><a class="nav-link" active-class="active">Login</a></router-link>
  <router-link to="/list" tag="li" class="nav-item" exact><a class="nav-link" active-class="active">List</a></router-link>
  <router-link to="/item" tag="li" class="nav-item"><a class="nav-link" active-class="active">Add Item</a></router-link>
  <router-link to="/item/:id" tag="li" class="nav-item"><a class="nav-link" active-class="active">Edit Item</a></router-link>
</ul>
</template>
<script>
</script>