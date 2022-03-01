<template>
<!-- NAVBAR -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            ><router-link to="/Home">Home</router-link></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">about</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Items</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"
            ><router-link to="/Addcategory">Addcategories</router-link></a
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
          <button type="submit" class="btn btn-info" v-on:click="updateitem()">
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
  methods: {
    async updateitem() {
      // UPDATING DATA IN DATABASE
      console.warn(this.categories); //check if data is update or not

      let dp = await axios.put(
        " http://localhost:3000/posts/" + this.$route.params.id,
        {
          name: this.categories.name,
          description: this.categories.description,
          Status: this.categories.Status,
        }
      );

      alert(dp);
    },
  },
  async mounted() {
    // GET ID FROM DATABASE
    const result = await axios.get(
      " http://localhost:3000/posts/" + this.$route.params.id
    );
    console.warn(result.data);
    this.categories = result.data;
  },
};
</script>
<style scoped>
.container {
  background-color: white;
  width: 35%;
  height: 40%;
}
</style>