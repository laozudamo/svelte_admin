import Login from '@/views/login/Login.svelte';
import Layout from '@/layout/Layout.svelte';

import Editor from '@/views/tools/editor.svelte';
import User from '@/views/tools/user.svelte';

const routes = [
  {
    name: '/',
    component: Layout
  },
  {
    name: '/login',
    component: Login
  },
  {
    name: '/editor',
    component: Editor, Layout: Layout
  },
  {
    name: '/user',
    component: User, Layout: Layout
  },

]

export { routes }