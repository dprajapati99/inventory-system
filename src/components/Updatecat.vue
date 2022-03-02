<template>
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
          <a class="nav-link"
            ><router-link to="/additems">Additems</router-link></a
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
  <!-- FOM FOR UPDATE CATEGORY -->
    <div class="container">
      <h3>Add New Category</h3>
      <form>
        <div class="form-group">
          <label for="Name">Name</label>
          <input
            type="name"
            class="form-control-left"
            id="Name"
            placeholder="Name"
            v-model="categories.name"
          />
        </div>

        <div class="form-group">
          <label for=" Email1msg">Description:</label>
          <input
            type="textarea"
            class="form-control-left"
            id="Description"
            placeholder="Description"
            v-model="categories.description"
          />
        </div>

        <lable for="Status">Status:</lable>
        <input
          type="radio"
          value="Active"
          id="Active"
          v-model="categories.Status"
          name="Status"
        />
        <label for="Active">Active</label>

        <input
          type="radio"
          value="Inactive"
          id="Inactive"
          v-model="categories.Status"
          name="Status"
        />
        <label for="Inactive">Inactive</label><br /><br />

        <router-link to="/Showcategories">
          <button type="submit"  class="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" v-on:click="updateitem()">
            Update New Category
          </button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
// UPDATE DATA 
import axios from "axios";
export default {
  data() {
    return {
      categories: {
        name: "",
        description: "",
        Status: "",
      },
  
    };
  },
  mounted(){
    this.getcat()
  },
  methods: {
      async getcat() {
    // GET ID FROM DATABASE
    const result = await axios.get(
      " http://localhost:3000/posts/" + this.$route.params.id
    );
    console.warn(result.data);
    this.categories = result.data;
  },
  // UPDATING DATA IN DATABASE
    async updateitem() {
      // CHECK IF DATA IS UPDATE OR NOT 
        console.warn(this.categories);
          await axios.put(
        " http://localhost:3000/posts/" + this.$route.params.id,
        {
          name: this.categories.name,
          description: this.categories.description,
          Status: this.categories.Status,
        }
      );

      alert("data updated successfully");
    },
  },
  
};
</script>
<style scoped>
.navbar{
 height: 7%;
}
.container {
  background-color: white;
  width: 35%;
  height: 40%;
}
</style>