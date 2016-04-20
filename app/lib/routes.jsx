import React from 'react';
import {mount} from 'react-mounter';

/* LAYOUTS */
import MainLayout from '../layouts/MainLayout.jsx';

/* CONTAINERS */
import HomePage from '../containers/HomePage.jsx';



/* FRONT END ROUTES */
FlowRouter.route('/', {
    name: 'home',
    action: function () {
        mount(MainLayout, {
            content: (<HomePage />),
        });
    }
});