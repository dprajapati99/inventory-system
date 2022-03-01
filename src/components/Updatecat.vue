<template>
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
        <a class="nav-link"><router-link to="/Addcategory">Addcategories</router-link></a>
      </li>
    </ul>
  </div>
</nav>
  <div class="container">
      <h3>Add New Category</h3>
      <form>
        <div class="form-group">
          <label for="Name">Name</label>
          <input
            type="name"
            class="form-control-left"
            id="Name"
            placeholder="Name" v-model="categories.name"
          />
        </div>

        <div class="form-group">
          <label for=" Email1msg">Description:</label>
          <input
            type="textarea"
            class="form-control-left"
            id="Description"
            placeholder="Description" v-model="categories.description"
          />
        </div>

        <lable for="Status">Status:</lable>
        <input
        type="radio"
        value="Active"
        id="Active"
        v-model="categories.Status"
        name="Status"
      />
      <label for="Active">Active</label>

       <input
        type="radio"
        value="Inactive"
        id="Inactive"
        v-model="categories.Status"
        name="Status"
      />
      <label for="Inactive">Inactive</label><br><br>
     
       <router-link to="/Showcategories">
        <button type="submit" class="btn btn-info" v-on:click="updateitem()">Update New Category</button>
        </router-link>
      </form>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            categories:{
                name:"",
               description:"",
                 Status:""
            }
        };
    },
     methods: {
    async updateitem() { // update data in database
      console.warn(this.categories);//check if data is update or not

      let dp = await axios.put(
        " http://localhost:3000/posts/" + this.$route.params.id,
        {
        name: this.categories.name,
          description : this.categories.description,
          Status: this.categories.Status
        
        }
      );

      alert(dp);
    },
  },async mounted() { 
        const result = await axios.get(" http://localhost:3000/posts/" + this.$route.params.id   );
        console.warn(result.data);
        this.categories = result.data;
        
  } 
}
</script>