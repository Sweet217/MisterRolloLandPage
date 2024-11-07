import { createApp } from 'vue';
import App from './App.vue';
import './styles/style.css'
import smoothScroll from 'vue-smooth-scroll';

const app = createApp(App);
app.use(smoothScroll);
app.mount('#app');