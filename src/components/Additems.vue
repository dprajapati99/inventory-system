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
            <a class="nav-link"
              ><router-link to="/showitems">Showitems</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link to="/addcategory">Addcategory</router-link></a
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
        <form @submit.prevent="additems()">
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

          <div class="form-group">
            <label for=" Email1msg">Price:</label>
            <input
              type="textarea"
              pattern="[0-9]{3}"
              class="form-control-left"
              id="Description"
              placeholder="Price"
              v-model="price"
              required
            />
          </div>

          <div class="form-group">
            <label for="category">Category</label>
            <select name="income" v-model="category" required>
              <optgroup label="Items">
                <option value="Art">Art</option>
                <option value="Fashion">Fashion</option>
                <option value="Food">Food</option>
              </optgroup>
            </select>
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
      await axios.post("http://localhost:3000/comments/", {
        name: this.name,
        description: this.description,
        price: this.price,
        category: this.category,
        Status: this.Status,
      });
      this.$router.push("/showitems");
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
  height: 45%;
}
</style>