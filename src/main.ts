import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
// import TawkMessengerVue from "@tawk.to/tawk-messenger-vue-3";

const app = createApp(App);
app.use(router);
// app.use(TawkMessengerVue, {
//   propertyId: "6335908b37898912e96bf998",
//   widgetId: "1ge4jp8no",
// });
app.mount('#app');
