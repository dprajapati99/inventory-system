import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import AddCategory from './components/category/AddCategory.vue'
import ShowCategories from './components/category/ShowCategories.vue'
import UpdateCat from './components/category/UpdateCat.vue'
import AddItems from './components/items/AddItems.vue'
import ShowItems from './components/items/ShowItems.vue'
import UpdateItems from './components/items/UpdateItems.vue'
import navBar from './components/navBar.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/category/addcategory',
        name: '/category/addcategory',
        component: AddCategory
    },
    {
        path: '/category/showcategories',
        name: '/category/showcategories',
        component: ShowCategories
    },
    {
        path: '/category/updatecat',
        name: '/category/updatecat',
        component: UpdateCat
    },
    {
        path: '/items/additems',
        name: '/items/additems',
        component: AddItems
    },
    {
        path: '/items/showitems',
        name: '/items/showitems',
        component: ShowItems
    },
    {
        path: '/items/updateitems',
        name: '/items/updateitems',
        component: UpdateItems
    },
    {
        path: '/navbar',
        name: 'navbar',
        component: navBar
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;