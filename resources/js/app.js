import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../css/variables.css'
import '../css/globalStyle.css'
// import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App);

app.use(router);
app.mount('#app');
