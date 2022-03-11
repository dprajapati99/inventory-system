<template>
  <!-- NAVBAR -->
  <navBar />
  <!-- NAVBAR -->

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
                $router.push({
                  name: '/category/updatecat',
                  params: { id: item.id },
                })
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
import navBar from "../navBar.vue";
import axios from "axios";
import swal from 'sweetalert';
export default {
  components: {
    navBar,
  },
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
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
          axios.delete(" http://localhost:3000/posts/" + id).then(() => {
        this.categories;
        this.status;
      });
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });  this.getItem();
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    
      // alert("deleted data");
    
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 7%;
}
.table {
  background: white;
}
</style>