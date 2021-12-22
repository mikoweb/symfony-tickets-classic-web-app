import layoutReady from './layoutReady.js';
import DrawerToggleBehavior from './layout/DrawerToggleBehavior.js';
import AppProgressBehavior from './layout/AppProgressBehavior.js';
import FormBehavior from './FormBehavior.js';
import AppDrawerBehavior from './layout/AppDrawerBehavior.js';
import MenuButtonBehavior from './elements/MenuButtonBehavior.js';

export default () => {
    layoutReady(() => {
        const progress = document.querySelector('#appProgress');
        const drawer = document.querySelector('#appDrawer');

        if (progress !== null) {
            new AppProgressBehavior(progress);
        }

        if (drawer !== null) {
            new AppDrawerBehavior(drawer);
        }

        for (const el of document.querySelectorAll('*[wc-hidden], *[wc-lazy], *[wc-ready]')) {
            el.classList.add('ready');
        }

        for (const el of document.querySelectorAll('.app-drawer-toggle')) {
            new DrawerToggleBehavior(el);
        }

        for (const el of document.querySelectorAll('.form-behavior')) {
            new FormBehavior(el);
        }

        for (const el of document.querySelectorAll('.menu-button')) {
            new MenuButtonBehavior(el);
        }
    });
};
