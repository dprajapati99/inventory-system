<template>
<!-- NAVBAR -->
  <navBar />
  <!-- NAVBAR -->


  <!-- BACKGROUND IMAGE -->
  <div
    class="bg-image d-flex justify-content-center align-items-center"
    style="
      background-image: url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/015.webp');
      height: 93vh;
    "
  >
    <div>
        <!-- TABLE FOR DISPLAY DATA -->
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
import navBar from '../navBar.vue'
import axios from "axios";
import swal from 'sweetalert';
export default {
  components:{
    navBar
  },
  data() {
    return {
      categories: [],
      price: "",
      categorory: "",
      status: "",
    };
  },
  mounted() {
  
    this.getItem(); 
     //   GET DATA 
  },
  methods: {
    //GET DATA FROM DATABASE
    getItem() {
      console.log("in get data");
      axios.get("http://localhost:3000/comments").then((result) => {
        this.categories = result.data;
        console.log(result.data);
      });
    },
    // DELETE DATA
     deleteItems(id) {
        swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    axios.delete("http://localhost:3000/comments/ "+ id).then(() => {
        this.categories;
        this.price;
        this.categorory;
        this.status;
      })
    swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",
    });
         this.getItem();
  } else {
    swal("Your imaginary file is safe!");
  }
});
      
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