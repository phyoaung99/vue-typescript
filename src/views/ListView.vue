<template>
  <h1>User Lists</h1>
  <!-- {{$store.state.users}} -->
  <router-link class="btn btn-sm btn-primary" :to="{ path: 'createuser',id:$store.state.id}">Create New User</router-link>
  <table class="table mt-3">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Gender</th>
      <th scope="col">Date of birth</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user,index) in $store.state.users" :key="index">
      <td>{{user.id}}</td>
      <td>{{user.username}}</td>
      <td>{{user.email}}</td>
      <td>{{user.address}}</td>
      <td>{{user.gender}}</td>
      <td>{{user.dateofbirth}}</td>
      <td>{{user.role}}</td>
    </tr>
  </tbody>
</table>

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components:{
  }
})
export default class ListView extends Vue{
  
}
</script>

<style>

</style>