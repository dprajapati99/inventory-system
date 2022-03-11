import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import axios from 'axios';
import VueAxios from 'vue-axios';
import swal from 'sweetalert';

// import store from './store';

const app = createApp(App)
app.use(VueAxios, axios)
app.use(swal)
createApp(App).use(router).mount('#app')
