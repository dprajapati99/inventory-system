<template>
<!-- NAVBAR -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            ><router-link to="/"  style="color:white">Home</router-link></a
          >
        </li>
      
        <li class="nav-item">
          <a class="nav-link" href="#">  <router-link to="/items/additems"  style="color:white">Add Items</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"
            ><router-link to="/category/addcategory"  style="color:white">Add Categories</router-link></a
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
      height: 94vh;
    "
  >
  <!-- TABLE FOR DISPLAY DATA  -->
    <div>
      <h3 class="text-white">SHOW CATEGORIES</h3>
      <table border="1px" align="center" class="table">
        <tr>
          <td>name</td>
          <td>Description</td>
          <td>Status</td>
          <td>Delete</td>
          <td>Edit</td>
        </tr>

        <tr v-for="item in categories" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.status }}</td>
          <td>
            <button
              type="submit"
              class="btn btn-outline-danger"
              data-mdb-ripple-color="dark"
              v-on:click="deleteItem(item.id)"
            >
              Delete
            </button>
          </td>

          <td>
            <button
              type="submit"
              class="btn btn-outline-success"
              data-mdb-ripple-color="dark"
              @click="
                $router.push({ name: '/category/updatecat', params: { id: item.id } })
              "
            >
              Edit
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
// FOR DELETE AND GET DATA
import axios from "axios";
export default {
  data() {
    return {
      categories: [],
      status: "",
    };
  },
  mounted() {
    this.getItem();
  },
  methods: {
     //GET DATA FROM DATABASE
    getItem() {
      console.log("in get data");
      axios.get(" http://localhost:3000/posts").then((result) => {
        this.categories = result.data;
        console.log(result.data);
      });
    },
     // DELETE DATA 
    deleteItem(id) {
      axios.delete(" http://localhost:3000/posts/" + id).then(() => {
        this.categories;
        this.status;
      });
      this.getItem();
    },
  },
};
</script>

<style scoped>
.navbar{
 height: 7%;
}
.table {
  background: white;
}
</style>