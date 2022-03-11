<template>
  <div>
    <!-- NAVBAR -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              ><router-link to="/" style="color: white">Home</router-link></a
            >
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link to="/items/additems" style="color: white"
                >Add Items</router-link
              ></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link"
              ><router-link to="/category/showcategories" style="color: white"
                >Show Categories</router-link
              ></a
            >
          </li>
        </ul>
      </div>
    </nav>
    <!-- BACKGROUND IMAGE -->
    <div
      class="bg-image d-flex justify-content-center align-items-center"
      style="
        background-image: url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/015.webp');
        height: 93vh;
      "
    >
      <!-- FORM FOR ADD NEW CATEGORY -->
      <div class="container">
        <h3>Add New Category</h3>

        <form @submit.prevent="addCategory()">
          <div class="form-group">
            <span v-if="v$.name.$error" style="color: red">
              {{ v$.name.$errors[0].$message }} </span
            ><br />
            <label for="Name">Name :</label>
            <input
              type="text"
              class="form-control-left"
              id="Name"
              placeholder="Name"
              v-model="state.name"
            />
          </div>

          <div class="form-group">
            <span v-if="v$.description.$error" style="color: red">
              {{ v$.description.$errors[0].$message }} </span
            ><br />
            <label for="description">Description:</label>
            <input
              type="textarea"
              maxlength="50"
              class="form-control-left"
              id="Description"
              placeholder="Description"
              v-model="state.description"
            />
          </div>
          <div class="from-group">
            <span v-if="v$.status.$error" style="color: red">
              {{ v$.status.$errors[0].$message }} </span
            ><br />
            <lable for="Status">Status:</lable>
            <input
              type="radio"
              value="Active"
              id="Active"
              v-model="state.status"
              name="status"
            />
            <label for="Active">Active</label>

            <input
              type="radio"
              value="Inactive"
              id="Inactive"
              v-model="state.status"
              name="status"
            />
            <label for="Inactive">Inactive</label><br /><br />
          </div>
          <button
            type="submit"
            class="btn btn-outline-dark btn-rounded"
            data-mdb-ripple-color="dark"
          >
            Add New Category
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
// POST DATA IN DATABASE

import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, alpha, maxLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      name: "",
      description: "",
      status: "",
    });
    const rules = computed(() => {
      return {
        name: { required, alpha },
        description: { required, maxLength: maxLength(10) },
        status: { required },
      };
    });
    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
    };
  },
  methods: {
    async addCategory() {
      this.v$.$validate();
      if (!this.v$.$error) {
        await axios.post(" http://localhost:3000/posts", {
          name: this.state.name,
          description: this.state.description,
          status: this.state.status,
        });
        this.$router.push("/category/showcategories");
        alert("thank you ,form successfully submitted");
      } else {
        alert("please fill the form");
      }
    },
  },
};
</script>
<style scoped>
.navbar {
  height: 7%;
}
.container {
  background-color: white;
  width: 35%;
  height: 40%;
}
</style>