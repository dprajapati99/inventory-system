import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Addcategory from './components/Addcategory.vue'
import Showcategories from './components/Showcategories.vue'
import Updatecat from './components/Updatecat.vue'
import Additems from './components/Additems.vue'
import Showitems from './components/Showitems.vue'
import Updateitem from './components/Updateitem.vue'
const routes = [
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/Addcategory',
        name: 'Addcategory',
        component: Addcategory
    },
    {
        path: '/Showcategories',
        name: 'Showcategories',
        component: Showcategories
    },
    {
        path: '/Updatecat',
        name: 'Updatecat',
        component: Updatecat
    },
    {
     path:'/Additems',
     name:'Additems',
     component: Additems
    },
    {
        path: '/Showitems',
        name: 'Showitems',
        component: Showitems
    },
    {
        path: '/Updateitem',
        name: 'Updateitem',
        component: Updateitem
    },
]
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;