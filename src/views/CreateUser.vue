<template>
 <div class="container">
   <div class="row mt-3">
     <div class="col-md-8 mx-auto">
       <h1 class="mb-3">Create User</h1>
       <form action="">
      <div class="input-group mb-3">
        <label for="" class="col-sm-2 col-form-label">ID :</label>
        <input type="text"  class="form-control ms-3 col-sm-6" :value="getId()">
      </div>
      <div class="input-group mb-3">
        <label for="" class="col-sm-2 col-form-label">User Name :</label>
        <input type="text"  class="form-control ms-3 col-sm-6">
      </div>
      <div class="input-group mb-3">
        <label for="" class="col-sm-2 col-form-label">Gender :</label>
        <div class="ms-5 form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male">
  <label class="form-check-label" for="inlineRadio1">Male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female">
  <label class="form-check-label" for="inlineRadio2">Female</label>
</div>
      </div>
      <div class="input-group mb-3">
        <label for="" class="col-sm-2 col-form-label">Email :</label>
        <input type="email"  class="form-control ms-3 col-sm-6">
      </div>
       <div class="input-group mb-3">
        <label for="" class="col-sm-2 col-form-label">Address :</label>
        <textarea rows="2" cols="5" class="form-control ms-3 col-sm-6"></textarea>
      </div>
     <user-age></user-age>
      <div class="input-group mb-3">
        <label for="" class="col-sm-2 col-form-label">User Role :</label>
<select name="" id="" class="form-control ms-3 col-sm-6">
  <option value="">Choose User Role</option>
  <option value="Admin">Admin</option>
  <option value="Guest">Guest</option>
  <option value="User">User</option>
</select>
      </div>
      <div class="btn-group float-end">
        <input type="submit" value="Create" class="btn btn-primary">
      </div>
    </form>
     </div>
   </div>
 </div>
</template>

<script lang="ts">
import store from '@/store';
import {Options, Vue} from 'vue-class-component';
import UserAge from '../components/UserAge.vue'
@Options({
components:{
UserAge
}
})
export default class CreateUser extends Vue{
  public id:any = 0
getId(){
  return this.id = "00"+store.state.id
}
mounted(){
  this.id = this.$route.params.id
  console.log(this.id)
}
}
</script>

<style>

</style>