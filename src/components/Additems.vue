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
            <a class="nav-link" href="#">Items</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              ><router-link to="/Showitems">Showitems</router-link></a
            >
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
                Category
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item"
                  ><router-link to="/Addcategory">Addcategory</router-link></a
                >
                <a class="dropdown-item"
                  ><router-link to="/Showcategories"
                    >Showcategories</router-link
                  ></a
                >
              </div>
            </div>
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
        <form method="post">
          <div class="form-group">
            <label for="Name">Name</label>
            <input
              type="name"
              class="form-control-left"
              id="Name"
              placeholder="Name"
              v-model="name"
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
            />
          </div>

          <div class="form-group">
            <label for=" Email1msg">Price:</label>
            <input
              type="textarea"
              class="form-control-left"
              id="Description"
              placeholder="Price"
              v-model="price"
            />
          </div>

          <div class="form-group">
            <label for="category">Category</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="category"
            >
              <option value="Art">Art</option>
              <option value="Fashion">Fashion</option>
              <option value="Food">Food</option>
            </select>
          </div>

          <lable for="Status">Status:</lable>
          <input
            type="radio"
            value="Active"
            id="Active"
            v-model="Status"
            name="Status"
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

          <router-link to="/Showcategories">
            <button type="submit" class="btn btn-info" v-on:click="additems()">
              Add New Category
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
// FOR POST DATA
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      description: "",
      price: "",
      category: "",
      Status: "",
    };
  },
  methods: {
    //ADD ITEMS
    async additems() {
      let result = await axios.post("http://localhost:3000/comments/", {
        name: this.name,
        description: this.description,
        price: this.price,
        category: this.category,
        Status: this.Status,
      });
      this.$router.push("/showitems");
      alert(result); 
    },
  },
};
</script>
<style scoped>
.container {
  background-color: white;
  width: 35%;
  height: 45%;
}
</style>