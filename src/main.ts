import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
router.isReady().then(() => {
  app.mount('#app');
});
