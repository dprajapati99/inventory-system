<template>
  <!-- NAVBAR -->
 <navBar/>
   <!-- NAVBAR -->

  <!-- BACKGROUND IMAGE -->
  <div
    class="bg-image d-flex justify-content-center align-items-center"
    style="
      background-image: url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/015.webp');
      height: 93vh;
    "
  >
    <!-- FOM FOR UPDATE CATEGORY -->
    <div class="container">
      <h3>Add New Category</h3>
      <form>
        <div class="form-group">
           <span v-if="v$.categories.name.$error" style="color: red">
              {{ v$.categories.name.$errors[0].$message }} </span
            ><br />
          <label for="Name">Name</label>
          <input
            type="name"
            class="form-control-left"
            id="Name"
            placeholder="Name"
            v-model="state.categories.name"
          />
        </div>

        <div class="form-group">
          <span v-if="v$.categories.description.$error" style="color: red">
              {{ v$.categories.description.$errors[0].$message }} </span
            ><br />
          <label for=" Email1msg">Description:</label>
          <input
            type="textarea"
            class="form-control-left"
            id="Description"
            placeholder="Description"
            v-model="state.categories.description"
          />
        </div>
        <div class="form-group">
          <span v-if="v$.categories.status.$error" style="color: red">
              {{ v$.status.$errors[0].$message }} </span
            ><br />
        <lable for="Status">Status:</lable>
        <input
          type="radio"
          value="Active"
          id="Active"
          v-model="state.categories.status"
          name="status"
        />
        <label for="Active">Active</label>

        <input
          type="radio"
          value="Inactive"
          id="Inactive"
          v-model="state.categories.status"
          name="status"
        />
        <label for="Inactive">Inactive</label><br /><br />

        </div>
          <button
            type="submit"
            class="btn btn-outline-dark btn-rounded"
            data-mdb-ripple-color="dark"
            v-on:click="updateItem()"  
            
             
          >
            Update New Category
          </button>
  
      </form>
    </div>
  </div>
</template>

<script>
// UPDATE DATA
import navBar from '../navBar.vue'
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required,  } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  components:{
   navBar
  },
  setup() {
    const state = reactive({
      categories: {
        name: "",
        description: "",
        status: "",
      },
    });
    const rules = computed(() => {
      return {
        categories: {
          name: { required,  },
          description: { required },
          status: { required },
        },
      };
    });
    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
    };
  },
  // export default {
  //   data() {
  //     return {
  //       categories: {
  //         name: "",
  //         description: "",
  //         status: "",
  //       },

  //     };
  //   },
  mounted() {
    this.getCat();
  },
  methods: {
    async getCat() {
      // GET ID FROM DATABASE
      const result = await axios.get(
        " http://localhost:3000/posts/" + this.$route.params.id
      );
      console.warn(result.data);
      this.state.categories = result.data;
    },
    // UPDATING DATA IN DATABASE
    async updateItem() {
      // CHECK IF DATA IS UPDATE OR NOT
      console.warn(this.state.categories);

      this.v$.$validate();
      if (!this.v$.$error) {
                      await axios.put(
          " http://localhost:3000/posts/" + this.$route.params.id,
          {
            name: this.state.categories.name,
            description: this.state.categories.description,
            status: this.state.categories.status,
          }
        );
       
        alert("form update ");
       this.$router.push("/category/showcategory");
       
      } else {
          
           alert("please fill the form ");

      }
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
  height: 40%;
}
</style>