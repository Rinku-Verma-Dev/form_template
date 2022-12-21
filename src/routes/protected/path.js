import { lazy } from 'react';

const routes = [
    {
        path: 'home',
        component: lazy(() => import('../../screens/home')),
        exact: true
    },

];

export default routes;