import { createApp } from 'vue';
import './index.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import router from './router';

// library.add(faUserSecret, faTwitter);

const app = createApp(App);
app.use(router);
// app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
