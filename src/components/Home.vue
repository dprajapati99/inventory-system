<template>
  <div id="app">
    
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
        <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  style="margin:5px;">
    Items
  </a>

   <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item"><router-link to="/Additems">Addcategory</router-link></a>
    <a class="dropdown-item"><router-link to="/Showitems">Showitems</router-link></a>
   
  </div>
</div>
      </li> 

      <li class="nav-item">
        <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="margin:5px;">
    Category
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item"><router-link to="/Addcategory">Addcategory</router-link></a>
    <a class="dropdown-item"><router-link to="/Showcategories">Showcategories</router-link></a>
   
  </div>
</div>
      </li>
    </ul>
  </div>
</nav>
<div>
  <h1> Inventory system</h1>
  
</div>


	
     

  </div>
</template>

<script>
export default {
 
 
}
</script>
<style scoped>
</style>



