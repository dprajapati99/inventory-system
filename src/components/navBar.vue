<template>
     <div>
           <nav class="navbar fixed-top navbar-expand-lg  navbar navbar-dark bg-dark ">
      <!-- Navbar content -->

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              ><router-link to="/"  style="color:white" >Home</router-link> <span class="sr-only">(current)</span></a
            >
          </li>
       <li class="nav-item">
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Item
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#"><router-link to="/items/additems"  style="color:black" >Add items</router-link></a>
    <a class="dropdown-item" href="#"><router-link to="/items/showitems"  style="color:black" >Show items</router-link></a>
    
  </div>
</div>
       </li> &ensp;

          <li class="nav-item">
           <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Category
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#"><router-link to="/category/addcategory"  style="color:black" >Add category</router-link></a>
    <a class="dropdown-item" href="#"><router-link to="/category/showcategories"  style="color:black" >Show category</router-link></a>
    
  </div>
</div>
          </li>
        </ul>
      </div>
    </nav>
     </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.navbar{
    height: 7%;
}
</style>