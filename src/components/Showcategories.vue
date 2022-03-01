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
          <td>{{ item.Status }}</td>
          <td>
            <button
              type="submit"
              class="btn btn-outline-danger"
              data-mdb-ripple-color="dark"
              v-on:click="deleteitem(item.id)"
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
                $router.push({ name: 'Updatecat', params: { id: item.id } })
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
      Status: "",
    };
  },
  mounted() {
    this.getitem();
  },
  methods: {
    // DELETE DATA 
    deleteitem(id) {
      axios.delete(" http://localhost:3000/posts/" + id).then(() => {
        this.categories;
        this.Status;
      });
      this.getitem();
    },
    getitem() {
      //GET DATA FROM DATABASE
      console.log("in get data");
      axios.get(" http://localhost:3000/posts").then((result) => {
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