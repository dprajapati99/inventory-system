<template>
  <div>
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
      <!-- FORM FOR ADD NEW CATEGORY -->
      <div class="container">
        <h3>Add New Category</h3>

        <form @submit.prevent="addCategory()">
          <div class="form-group">
            <span v-if="v$.name.$error" style="color: red">
              {{ v$.name.$errors[0].$message }} </span
            ><br />
            <label for="Name">Name :</label>
            <input
              type="text"
              class="form-control-left"
              id="Name"
              placeholder="Name"
              v-model="state.name"
            />
          </div>

          <div class="form-group">
            <span v-if="v$.description.$error" style="color: red">
              {{ v$.description.$errors[0].$message }} </span
            ><br />
            <label for="description">Description:</label>
            <input
              type="textarea"
              maxlength="50"
              class="form-control-left"
              id="Description"
              placeholder="Description"
              v-model="state.description"
            />
          </div>
          <div class="from-group">
            <span v-if="v$.status.$error" style="color: red">
              {{ v$.status.$errors[0].$message }} </span
            ><br />
            <lable for="Status">Status:</lable>
            <input
              type="radio"
              value="Active"
              id="Active"
              v-model="state.status"
              name="status"
            />
            <label for="Active">Active</label>

            <input
              type="radio"
              value="Inactive"
              id="Inactive"
              v-model="state.status"
              name="status"
            />
            <label for="Inactive">Inactive</label><br /><br />
          </div>
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
// POST DATA IN DATABASE
import navBar from '../navBar.vue'
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, alpha, maxLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import swal from 'sweetalert';
export default {
  components:{
    navBar
},
  setup() {
    const state = reactive({
      name: "",
      description: "",
      status: "",
    });
    const rules = computed(() => {
      return {
        name: { required, alpha },
        description: { required, maxLength: maxLength(10) },
        status: { required },
      };
    });
    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
    };
  },
  methods: {
    async addCategory() {
      this.v$.$validate();
      if (!this.v$.$error) {
           await axios.post("http://localhost:3000/posts/", {
          name: this.state.name,
          description: this.state.description,
          status: this.state.status,
        });
        this.$router.push("/category/showcategories");
    swal("Good job!", "You clicked the button!", "success");
      } else {
        swal( "...Please fill the form!");
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