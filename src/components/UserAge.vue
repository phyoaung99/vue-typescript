<template>
  <div class="row">
    <div class="input-group mb-3">
      <label for="" class="col-sm-2">Date of birth</label>
      <Datepicker
        v-model="dateofbirth"
        @change="calculateAge"
        class="form-control ps-3 border-0"
      ></Datepicker>
    </div>
    <div class="input-group mb-3">
      <label for="" class="col-sm-2">Age</label>
      <input
        type="text"
        class="col-sm-6 ms-3 form-control"
        v-bind:value="calculateAge()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
import { Options, Vue, } from "vue-class-component";
@Options({
  components: {
    Datepicker,
  },
})

export default class UserAge extends Vue {
  public dateofbirth: any = new Date();
  
  calculateAge() {
    var current = new Date();
    var age = current.getFullYear() - this.dateofbirth.getFullYear();
    var m = current.getMonth() - this.dateofbirth.getMonth();
    if (m < 0 || (m === 0 && current.getDate() < this.dateofbirth.getDate())) {
      age--;
    }
    return age;
  }
  myDate(){
    this.$emit("myDate",this.dateofbirth.toLocaleDateString());
  }
  mounted(){
    this.myDate()
  }
}
</script>

<style>
</style>