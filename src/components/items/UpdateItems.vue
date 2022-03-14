<template>
  <div>
    s
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
      <!-- FOM FOR UPDATING ITEMS  -->
      <div class="container">
        <h3>Add New Items</h3>
        <form @submit.prevent="updateItem()">
          <div class="form-group">
            <span v-if="v$.add.name.$error" style="color: red">
              {{ v$.add.name.$errors[0].$message }} </span
            ><br />
            <label for="Name">Name </label>
            <input
              type="name"
              class="form-control-left"
              id="Name"
              placeholder="Name"
              v-model="state.add.name"
            />
          </div>

          <div class="form-group">
            <span v-if="v$.add.description.$error" style="color: red">
              {{ v$.add.description.$errors[0].$message }} </span
            ><br />
            <label for=" Email1msg">Description :</label>
            <input
              type="textarea"
              class="form-control-left"
              id="Description"
              placeholder="Description"
              v-model="state.add.description"
            />
          </div>

          <div class="form-group">
            <span v-if="v$.add.price.$error" style="color: red">
              {{ v$.add.price.$errors[0].$message }} </span
            ><br />
            <label for=" Email1msg">Price :</label>
            <input
              type="textarea"
              class="form-control-left"
              id="Description"
              placeholder="Price"
              v-model="state.add.price"
            />
          </div>

          <div class="form-group">
            <span v-if="v$.add.category.$error" style="color: red">
              {{ v$.add.category.$errors[0].$message }} </span
            ><br />
            <label for="category">Category :</label>
            <select name="income" v-model="state.add.category">
              <optgroup label="Items">
                <option value="Art">Art</option>
                <option value="Fashion">Fashion</option>
                <option value="Food">Food</option>
              </optgroup>
            </select>
          </div>
          <div class="form-group">
            <span v-if="v$.add.status.$error" style="color: red">
              {{ v$.add.status.$errors[0].$message }} </span
            ><br />
            <lable for="status">Status :</lable>
            <input
              type="radio"
              value="Active"
              id="Active"
              v-model="state.add.status"
              name="status"
            />
            <label for="Active">Active</label>

            <input
              type="radio"
              value="Inactive"
              id="Inactive"
              v-model="state.add.status"
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
// UPDATE DATA IN DATABSE
import navBar from "../navBar.vue";
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, alpha ,maxLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import swal from "sweetalert";
export default {
  components: {
    navBar,
  },
  setup() {
    const state = reactive({
      add: {
        name: "",
        description: "",
        price: "",
        category: "",
        status: "",
      },
    });
    const rules = computed(() => {
      return {
        add: {
          name: { required, alpha },
          description: { required, alpha },
          price: { required ,maxLength:maxLength(3)},
          category: { required },
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
  // data() {
  //   return {
  //     add: {
  //       name: "",
  //       description: "",
  //       price: "",
  //       category: "",
  //       status: "",
  //     },
  //   };
  // },
  mounted() {
    this.getItem();
  },
  methods: {
    //   GET ID FOR UPDATEING DATA IN DATABASE
    async getItem() {
      const result = await axios.get(
        "http://localhost:3000/comments/" + this.$route.params.id
      );
      console.warn(result.data);
      this.state.add = result.data;
    },
    // UPDATE DATA IN DATABSE
    async updateItem() {
      //CHECK IF DATA UPDATE OR NOT
      console.warn(this.state.add);
      this.v$.$validate();
      if (!this.v$.$error) {
        await axios.put(
          "http://localhost:3000/comments/" + this.$route.params.id,
          {
            name: this.state.add.name,
            description: this.state.add.description,
            price: this.state.add.price,
            category: this.state.add.category,
            status: this.state.add.status,
          }
        );

        this.$router.push("/items/showitems");
        swal("Good job!", "Item updated!", "success");
      } else {
        swal("...Please fill the form!");
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
  height: 60%;
}
</style>
