<template>
  <div>
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
            <div class="dropdown show">
              <a
                class="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style="margin: 5px"
              >
                Items
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item"
                  ><router-link to="/Additems">Additems</router-link></a
                >
                <a class="dropdown-item"
                  ><router-link to="/Showitems">Showitems</router-link></a
                >
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              ><router-link to="/Showcategories">Showcategories</router-link></a
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
        <form method="post">
          <div class="form-group">
            <label for="Name">Name</label>
            <input
              type="name"
              class="form-control-left"
              id="Name"
              placeholder="Name"
              v-model="name"
              required
            />
          </div>

          <div class="form-group">
            <label for=" Email1msg">Description:</label>
            <input
              type="textarea"
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
            required
          />
          <label for="Inactive">Inactive</label><br /><br />

          <router-link to="/Showcategories">
            <button
              type="submit"
              class="btn btn-info"
              v-on:click="addcategories()"
            >
              Add New Category
            </button>
          </router-link>
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
      let result = await axios.post(" http://localhost:3000/posts", {
        name: this.name,
        description: this.description,
        Status: this.Status,
      });
      this.$router.push("/showcategories");
      alert(result);
    },
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