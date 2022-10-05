import { createApp } from 'vue';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import router from './router';

library.add(faUserSecret, faTwitter);
// import TawkMessengerVue from "@tawk.to/tawk-messenger-vue-3";

const app = createApp(App);
app.use(router);
// app.use(TawkMessengerVue, {
//   propertyId: "6335908b37898912e96bf998",
//   widgetId: "1ge4jp8no",
// });
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
