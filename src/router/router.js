import { createWebHistory, createRouter } from 'vue-router';
import GettingStarted from '../views/GettingStarted.vue';
import Colors from '../views/Colors.vue';
import Spacing from '../views/Spacing.vue';
import Typography from '../views/Typography.vue';
import Icons from '../views/Icons.vue';

const routes = [
  {
    path: '/',
    name: 'Getting Started',
    component: GettingStarted,
  },
  {
    path: '/colors',
    name: 'Colors',
    component: Colors,
  },
  {
    path: '/spacing',
    name: 'Spacing',
    component: Spacing,
  },
  {
    path: '/typography',
    name: 'Typography',
    component: Typography,
  },
  {
    path: '/icons',
    name: 'Icons',
    component: Icons,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
