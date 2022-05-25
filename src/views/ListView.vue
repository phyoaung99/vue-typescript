<template>
  <h1>User Lists</h1>
  {{$store.state.users}}
  <router-link class="btn btn-sm btn-primary" :to="{ path: 'createuser',id:$store.state.id}" @click="incrementId()">Create New User</router-link>
</template>

<script lang="ts">
import store from "@/store";
import { Options, Vue } from "vue-class-component";
@Options({
  components:{
  }
})
export default class ListView extends Vue{
  incrementId():void{
   store.commit("IncId")
  }
}
</script>

<style>

</style>