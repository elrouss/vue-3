import { createApp } from 'vue';
import App from './App.vue';
import router from './router/';
import store from './store';
import ui from '@/components/ui/index';

const app = createApp(App);

ui.forEach((component) => {
  // @ts-ignore
  app.component(component.name, component);
});

app.use(store).use(router).mount('#app');
