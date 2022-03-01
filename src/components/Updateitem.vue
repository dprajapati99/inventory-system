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
        <a class="nav-link"><router-link to="/Showitems">Showitems</router-link></a>
      </li>
    </ul>
  </div>
</nav>
      <!-- <router-link to="/Showcategories"><button type="button" class="btn btn-success">Showcategories</button></router-link><br><br> -->
    <div class="container">
      <h3>Add New Items</h3>
      <form>
        <div class="form-group">
          <label for="Name">Name</label>
          <input
            type="name"
            class="form-control-left"
            id="Name"
            placeholder="Name" v-model="add.name"
          />
        </div>
      
        
        <div class="form-group">
          <label for=" Email1msg">Description:</label>
          <input
            type="textarea"
            class="form-control-left"
            id="Description"
            placeholder="Description" v-model=" add.description"
          />
        </div>

        <div class="form-group">
          <label for=" Email1msg">Price:</label>
          <input
            type="textarea"
            class="form-control-left"
            id="Description"
            placeholder="Price" v-model="add.price"
          />
        </div>

        <div class="form-group">
            <label for="category">Category</label>
            <select class="form-select" aria-label="Default select example" v-model="add.category">
                 <option selected>Select One </option>
                 <option value="Art">Art</option>
                 <option value="Fashion">Fashion</option>
                 <option value="Food">Food</option>
             </select>
        </div>


        <lable for="Status">Status:</lable>
        <input
        type="radio"
        value="Active"
        id="Active"
        v-model="add.Status"
        name="Status"
      />
      <label for="Active">Active</label>

       <input
        type="radio"
        value="Inactive"
        id="Inactive"
        v-model="add.Status"
        name="Status"
      />
      <label for="Inactive">Inactive</label><br><br>
     
       <router-link to="/Showitems">
        <button type="submit" class="btn btn-info" v-on:click="updateitem()">Update Item</button>
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
            add:{
                name:"",
               description:"",
               price:"",
               category:"",
                 Status:""
            }
        };
    },
     methods: {
    async updateitem() { // update data in database
      console.warn(this.categories);//check if data is update or not

      let dp = await axios.put(
        "http://localhost:3000/comments/" + this.$route.params.id,
        {
        name: this.add.name,
          description : this.add.description,
          price:this.add.price,
          category:this.add.category,
          Status: this.add.Status
        
        }
      );

      alert(dp);
    },
  },async mounted() { 
        const result = await axios.get("http://localhost:3000/comments/" + this.$route.params.id   );
        console.warn(result.data);
        this.add = result.data;
        
  } 

}
</script>
