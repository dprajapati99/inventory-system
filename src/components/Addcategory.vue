<template>
  <div>
    <!-- NAVBAR -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              ><router-link to="/home">Home</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">about</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link to="/additems">Additems</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link"
              ><router-link to="/showcategories">Showcategories</router-link></a
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
        
        <form  @submit.prevent="addcategories()" >
          <div class="form-group">
            <label for="Name">Name</label>
            <input
              type="text"
              class="form-control-left"
              id="Name"
              placeholder="Name"
              v-model="name"
              required
            />
          </div>

          <div class="form-group">
          <label for="description">Description:</label>
            <input
              type="textarea"  maxlength="50"
              class="form-control-left"
              id="Description"
              placeholder="Description"
              v-model="description"
              required
            />
          </div>

          <lable for="Status">Status:</lable>
          <input
            type="radio"
            value="Active"
            id="Active"
            v-model="Status"
            name="Status"
            required
          />
          <label for="Active">Active</label>

          <input
            type="radio"
            value="Inactive"
            id="Inactive"
            v-model="Status"
            name="Status"
          />
          <label for="Inactive">Inactive</label><br /><br />
       
      
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

export default {
  data() {
    return {
      name: "",
      description: "",
      Status: "",
    };
  },

  methods: {
    // ADD CATEGORY
    async addcategories() {
    
          await axios.post(" http://localhost:3000/posts", {
            name: this.name,
            description: this.description,
            Status: this.Status,
          });
          this.$router.push("/showcategories");
       
        }
    
  
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