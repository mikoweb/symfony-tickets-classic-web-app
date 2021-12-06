import layoutReady from './layoutReady.js';
import DrawerToggle from './layout/DrawerToggle.js';
import AppProgress from './layout/AppProgress.js';
import FormBehavior from './FormBehavior.js';

export default () => {
    layoutReady(() => {
        const progress = document.querySelector('#app-progress');

        if (progress !== null) {
            new AppProgress(progress);
        }

        for (const el of document.querySelectorAll('*[wc-hidden], *[wc-lazy], *[wc-ready]')) {
            el.classList.add('ready');
        }

        for (const el of document.querySelectorAll('.app-drawer-toggle')) {
            new DrawerToggle(el);
        }

        for (const el of document.querySelectorAll('.form-behavior')) {
            new FormBehavior(el);
        }
    });
};
