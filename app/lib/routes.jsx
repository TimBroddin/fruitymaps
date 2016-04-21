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
        DocHead.addMeta({ property: "og:url", content: "http://fruitymaps.com" });
        DocHead.addMeta({ property: "og:type", content: "website" });
        DocHead.addMeta({ property: "og:title", content: "Fruity Maps - Apple Maps in your browser!" });
        DocHead.addMeta({ property: "og:description", content: "Use Apple Maps in your browser!" });
        DocHead.addMeta({ property: "og:image", content: "http://fruitymaps.com/og.png" });
        DocHead.addMeta({ name: "viewport", content: "width=device-width, initial-scale=1" });

        DocHead.setTitle('Fruity Maps - Apple Maps in your browser');

        analytics.page('/');
        
        mount(MainLayout, {
            content: (<HomePage />),
        });
    }
});