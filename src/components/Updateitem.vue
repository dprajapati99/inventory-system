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
            ><router-link to="/addcategory">Addcategories</router-link></a
          >
          </li>
          <li class="nav-item">
            <a class="nav-link"
              ><router-link to="/showitems">Showitems</router-link></a
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
    <!-- FOM FOR UPDATING ITEMS  -->
      <div class="container">
        <h3>Add New Items</h3>
        <form>
          <div class="form-group">
            <label for="Name">Name</label>
            <input
              type="name"
              class="form-control-left"
              id="Name"
              placeholder="Name"
              v-model="add.name"
            />
          </div>

          <div class="form-group">
            <label for=" Email1msg">Description:</label>
            <input
              type="textarea"
              class="form-control-left"
              id="Description"
              placeholder="Description"
              v-model="add.description"
            />
          </div>

          <div class="form-group">
            <label for=" Email1msg">Price:</label>
            <input
              type="textarea"
              class="form-control-left"
              id="Description"
              placeholder="Price"
              v-model="add.price"
            />
          </div>

          <div class="form-group">
            <label for="category">Category</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="add.category"
            >
              <option selected>Select One</option>
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
            v-model="add.Status"
            name="Status"
          />
          <label for="Active">Active</label>

          <input
            type="radio"
            value="Inactive"
            id="Inactive"
            v-model="add.Status"
            name="Status"
          />
          <label for="Inactive">Inactive</label><br /><br />

          <router-link to="/Showitems">
            <button
              type="submit"
              class="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark"
              v-on:click="updateitem()"
            >
              Update Item
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
// UPDATE DATA IN DATABSE
import axios from "axios";
export default {
  data() {
    return {
      add: {
        name: "",
        description: "",
        price: "",
        category: "",
        Status: "",
      },
    };
  },
  mounted(){
    this.getitem()
  },
  methods: {
    //   GET ID FOR UPDATEING DATA IN DATABASE
  async  getitem() {
    const result = await axios.get(
      "http://localhost:3000/comments/" + this.$route.params.id
    );
    console.warn(result.data);
    this.add = result.data;
  },
      // UPDATE DATA IN DATABSE
    async updateitem() {
      //CHECK IF DATA UPDATE OR NOT
      console.warn(this.add); 

      await axios.put(
        "http://localhost:3000/comments/" + this.$route.params.id,
        {
          name: this.add.name,
          description: this.add.description,
          price: this.add.price,
          category: this.add.category,
          Status: this.add.Status,
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
  height: 48%;
}
</style>
