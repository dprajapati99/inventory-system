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
            ><router-link to="/Additems">Additems</router-link></a
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
    <div>
        <!-- TABLE FOR DIAPLAY DATA -->
      <h3 class="text-white">SHOW CATEGORIES</h3>
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

          <td>{{ item.Status }}</td>
          <td>
            <button
              type="submit"
              class="btn btn-outline-danger"
              data-mdb-ripple-color="dark"
              v-on:click="deleteitems(item.id)"
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
                $router.push({ name: 'Updateitem', params: { id: item.id } })
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
      Status: "",
    };
  },
  mounted() {
    //   GET DATA 
    this.getitem();
  },
  methods: {
    //   DELETE DATA
    deleteitems(id) {
      axios.delete("http://localhost:3000/comments/" + id).then(() => {
        this.categories;
        this.price;
        this.categorory;
        this.Status;
      });
      this.getitem();
    },
    getitem() {
      //GET DATA FROM DATABASE
      console.log("in get data");
      axios.get("http://localhost:3000/comments").then((result) => {
        this.categories = result.data;
        console.log(result.data);
      });
    },
  },
};
</script>
<style scoped>
.table {
  background: white;
}
</style>