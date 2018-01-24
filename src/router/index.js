import Vue from 'vue';
import Router from 'vue-router';
import homeRoutes from '../modules/home/routes';
import contactRoutes from '../modules/contact/routes';

Vue.use(Router);

export default new Router({
  routes: [
    ...homeRoutes,
    ...contactRoutes,
  ],
});
