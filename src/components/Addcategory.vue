<template>
  <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">about</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Items</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/Showcategories">Showcategories</router-link></a>
      </li>
    </ul>
  </div>
</nav>
      <!-- <router-link to="/Showcategories"><button type="button" class="btn btn-success">Showcategories</button></router-link><br><br> -->
    <div class="container">
      <h3>Add New Category</h3>
      <form method="post" >
        <div class="form-group">
          <label for="Name">Name</label>
          <input
            type="name"
            class="form-control-left"
            id="Name"
            placeholder="Name" v-model="name"
          />
        </div>

        <div class="form-group">
          <label for=" Email1msg">Description:</label>
          <input
            type="textarea"
            class="form-control-left"
            id="Description"
            placeholder="Description" v-model="description"
          />
        </div>

        <lable for="Status">Status:</lable>
        <input
        type="radio"
        value="Active"
        id="Active"
        v-model="Status"
        name="Status"
      />
      <label for="Active">Active</label>

       <input
        type="radio"
        value="Inactive"
        id="Inactive"
        v-model="Status"
        name="Status"
      />
      <label for="Inactive">Inactive</label><br><br>
     
       <router-link to="/Showcategories">
        <button type="submit" class="btn btn-info" v-on:click="addcategories()">Add New Category</button>
        </router-link>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
      return{
      name :"",
      description:"",
      Status:""
      };
    },
    methods:{
      // add categories
      async addcategories(){
        let result = await axios.post(" http://localhost:3000/posts",{
          name :this.name,
          description:this.description,
          Status:this.Status,

        });
        this.$router.push("/showcategories")
        alert(result)
      
      }
    }
};
</script>