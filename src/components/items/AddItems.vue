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
            <a class="nav-link"
              ><router-link to="/items/showitems" style="color: white"
                >Show Items</router-link
              ></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link to="category/addcategory" style="color: white"
                >Add Category</router-link
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
      <!-- FORM ADD NEW ITEMS -->
      <div class="container">
        <h3>Add New Items</h3>
        <form @submit.prevent="addItems()">
          <div class="form-group">
            <span v-if="v$.name.$error" style="color: red">
              {{ v$.name.$errors[0].$message }} </span
            ><br />
            <label for="Name">Name :</label>
            <input
              type="name"
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
            <label for=" Email1msg">Description :</label>
            <input
              type="textarea"
              class="form-control-left"
              id="Description"
              placeholder="Description"
              v-model="state.description"
            />
          </div>

          <div class="form-group">
            <span v-if="v$.price.$error" style="color: red">
              {{ v$.price.$errors[0].$message }} </span
            ><br />
            <label for=" Email1msg">Price :</label>
            <input
              type="textarea"
              class="form-control-left"
              id="Description"
              placeholder="Price"
              v-model="state.price"
            />
          </div>

          <div class="form-group">
            <span v-if="v$.category.$error" style="color: red">
              {{ v$.category.$errors[0].$message }} </span
            ><br />
            <label for="category">Category :</label>
            <select name="income" v-model="state.category">
              <optgroup label="Items">
                <option value="Art">Art</option>
                <option value="Fashion">Fashion</option>
                <option value="Food">Food</option>
              </optgroup>
            </select>
          </div>
          <div class="form-group">
            <span v-if="v$.status.$error" style="color: red">
              {{ v$.status.$errors[0].$message }} </span
            ><br />
            <lable for="status">Status :</lable>
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
// FOR POST DATA
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, alpha, maxLength, numeric } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      name: "",
      description: "",
      price: "",
      category: "",
      status: "",
    });
    const rules = computed(() => {
      return {
        name: { required, alpha },
        description: { required, maxLength: maxLength(10) },
        price: { required, numeric, maxLength:maxLength(3)},
        category: { required },
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
    //ADD ITEMS
    async addItems() {
      this.v$.$validate();
      if (!this.v$.$error) {
        await axios.post("http://localhost:3000/comments/", {
          name: this.state.name,
          description: this.state.description,
          price: this.state.price,
          category: this.state.category,
          status: this.state.status,
        });
        this.$router.push("/items/showitems");
        alert("thank you, form submmitted successfully ");
      } else {
        alert("please fill the form ");
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
  height: 60%;
}
</style>