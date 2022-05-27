<template>
  <div class="container">
    <div class="row mt-2">
      <div class="col-md-8 mx-auto">
        <!-- <h1 class="mb-3">User Registeration</h1> -->
        <form @submit.prevent="registerMode == true ? register() : confirm()">
          <div class="input-group mb-3">
            <label for="" class="col-sm-2 col-form-label">ID :</label>
            <input
              type="number"
              class="form-control ms-3 col-sm-6"
              :value="getId()"
              :disabled="id_disabled"
            />
          </div>
          <div class="input-group mb-3">
            <label for="" class="col-sm-2 col-form-label">User Name :</label>
            <input
              id="username"
              type="text"
              class="form-control ms-3 col-sm-6"
              v-model="user.username"
              :disabled="disabled"
            />
          </div>
          <p class="text-danger">{{ errors.username_err }}</p>
          <div class="input-group mb-1">
            <label for="" class="col-sm-2 col-form-label">Gender :</label>
            <div class="ms-5 form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="male"
                v-model="user.gender"
                :disabled="disabled"
              />
              <label class="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="female"
                v-model="user.gender"
                :disabled="disabled"
              />
              <label class="form-check-label" for="inlineRadio2">Female</label>
            </div>
          </div>
          <div class="input-group mb-3">
            <label for="" class="col-sm-2 col-form-label">Email :</label>
            <input
              id="email"
              type="email"
              class="form-control ms-3 col-sm-6"
              v-model="user.email"
              :disabled="disabled"
            />
          </div>
          <p class="text-danger">{{ errors.email_err }}</p>
          <div class="input-group mb-3">
            <label for="" class="col-sm-2 col-form-label">User Role :</label>
            <select
              name=""
              id=""
              class="form-select ms-3 col-sm-6"
              v-model="user.role"
              :disabled="disabled"
            >
              <option value="" selected>Choose User Role</option>
              <option value="Admin">Admin</option>
              <option value="Guest">Guest</option>
              <option value="User">User</option>
            </select>
          </div>
          <div>
            <calculate-age
            @myDate="myDate"
            v-show="componentHide"
          ></calculate-age>
          </div>
          <div class="input-group mb-3">
            <label for="" class="col-sm-2 col-form-label">Address :</label>
            <textarea
              rows="4"
              cols="5"
              class="form-control ms-3 col-sm-6"
              v-model="user.address"
              :disabled="disabled"
            ></textarea>
          </div>
          <!-- {{user.dateofbirth}} -->
          <div class="btn-group float-end">
            <button class="btn btn-primary" type="submit">
              {{ registerMode ? "Register" : "Confirm" }}
            </button>
          </div>
          <button
            type="reset"
            class="btn btn-dark text-white float-end me-5"
            @click="backMode == true ? back() : ''"
          >
            {{ backMode ? "Back" : "Clear" }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { Options, Vue } from "vue-class-component";
import CalculateAge from "../components/CalculateAge.vue";
import { Users, Error } from "../types";
@Options({
  components: {
    CalculateAge,
  },
})
export default class CreateUser extends Vue {
  user: Users = {
    id: 0,
    dateofbirth: "",
    username: "",
    gender: "",
    role: "",
    address: "",
    email: "",
  };

  errors: Error = {
    username_err: "",
    email_err: "",
  };

  private get_id = 0 as number | string;
  private disabled = false as boolean;
  private componentHide = true as boolean;
  private registerMode = false as boolean;
  private backMode = false as boolean;
  private id_disabled = true as boolean;

  getId() {
    if (store.state.id == 0) {
      this.get_id = "000" + 1;
    } else {
      this.get_id = "000" + (store.state.id + 1);
    }
    this.user.id = "000" + store.state.id;

    return this.get_id;
  }

  myDate(date: string): void {
    let current = new Date();
    if (date == current.toLocaleDateString()) {
      this.user.dateofbirth = "";
    } else {
      this.user.dateofbirth = date;
    }
  }

  mounted() {
    this.user.dateofbirth;
  }

  register(): void {
    store.dispatch("register", this.user);
    this.$router.push({
      name: "list",
    });
  }

  confirm() {
    if (this.user.username == "") {
      this.errors.username_err = "User name is required";
    } else {
      this.errors.username_err = "";
    }
    if (this.user.email == "") {
      this.errors.email_err = "Email field is required";
    } else {
      this.errors.email_err = "";
    }
    if (this.user.username != "" && this.user.email != "") {
      this.disabled = true;
      this.componentHide = false;
      this.registerMode = true;
      this.backMode = true;
    }
  }
  back() {
    this.disabled = false;
    this.componentHide = true;
    this.registerMode = false;
    this.backMode = false;
  }
}
</script>

<style>
.form-control:disabled,
.form-control[readonly] {
  background-color: #f8f9fa;
  opacity: 1;
}

.form-check-input:checked {
  background-color: #fe1c07;
  border-color: #fd0d0d;
}

.dp__clear_icon {
  position: absolute;
  display: none;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
  color: var(--dp-icon-color);
}
.text-danger {
  float: right;
}
input {
  display: inline-block;
}
.dp__menu {
  height: 340px;
}
.dp__select {
  color: var(--dp-success-color);
  padding: 2px;
  background: #000;
}
.dp__cancel {
  color: var(--dp-primary-color);
}
.dp__button {
  visibility: hidden;
}
.dp__button {
  margin-top: -30px;
}
.dp__cell_inner {
  height: 30px;
  padding: 3px;
}
</style>