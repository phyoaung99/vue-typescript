<template>
  <div class="row">
    <div class="input-group mb-3">
      <label for="" class="col-sm-2">Date of birth : </label>
      <Datepicker
        v-model="dateofbirth"
        class="form-control ps-3 pe-0 border-0"
        v-bind:value="myDate()"
      ></Datepicker>
    </div>
    <div class="input-group mb-3">
      <label for="" class="col-sm-2">Age :</label>
      <input
        type="number"
        class="col-sm-6 ms-3 form-control"
        v-bind:value="calAge()"
        disabled
      />
    </div>
  </div>
</template>

<script lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
import { Options, Vue } from "vue-class-component";
@Options({
  components: {
    Datepicker,
  },
})
export default class UserAge extends Vue {
  public dateofbirth: any = new Date();
  calAge() {
    var current = new Date();
    var age = current.getFullYear() - this.dateofbirth.getFullYear();
    var m = current.getMonth() - this.dateofbirth.getMonth();
    if (m < 0 || (m === 0 && current.getDate() < this.dateofbirth.getDate())) {
      age--;
    }
    return age;
  }
  myDate(): void {
    const date = this.dateofbirth.toLocaleDateString();
    this.$emit("myDate", date);
  }
  mounted() {
    this.myDate();
  }
}
</script>

<style>
</style>