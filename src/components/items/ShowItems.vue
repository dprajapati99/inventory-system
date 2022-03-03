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
          <a class="nav-link"
            ><router-link to="/items/additems"  style="color:white">Add Items</router-link></a
          >
        </li>
        <li class="nav-item">
           <a class="nav-link" href="#">  <router-link to="/category/addcategory"  style="color:white">Add Category</router-link></a>
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
    <div>
        <!-- TABLE FOR DIAPLAY DATA -->
      <h3 class="text-white">SHOW ITEMS</h3>
      <table border="1px" align="center" class="table">
        <tr>
          <td>name</td>
          <td>Description</td>
          <td>Price</td>
          <td>Category</td>
          <td>Status</td>
          <td>Delete</td>
          <td>Edit</td>
        </tr>

        <tr v-for="item in categories" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.category }}</td>

          <td>{{ item.status }}</td>
          <td>
            <button
              type="submit"
              class="btn btn-outline-danger"
              data-mdb-ripple-color="dark"
              v-on:click="deleteItems(item.id)"
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
                $router.push({ name: '/items/updateitems', params: { id: item.id } })
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
// FOR GET AND DELETE
import axios from "axios";
export default {
  data() {
    return {
      categories: [],
      price: "",
      categorory: "",
      status: "",
    };
  },
  mounted() {
  
    this.getItem();   //   GET DATA 
  },
  methods: {
    getItem() {
      //GET DATA FROM DATABASE
      console.log("in get data");
      axios.get("http://localhost:3000/comments").then((result) => {
        this.categories = result.data;
        console.log(result.data);
      });
    },
    // DELETE DATA
     deleteItems(id) {
      axios.delete("http://localhost:3000/comments/" + id).then(() => {
        this.categories;
        this.price;
        this.categorory;
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