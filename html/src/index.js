// components bundles
import './components/bundles/components.js';

// app imports
import namespace from './core/namespace.js';
import initializeLayout from './behaviors/initializeLayout.js';
import state from './core/state';
import Behavior from './behaviors/Behavior.js';
import FormBehavior from './behaviors/FormBehavior.js';
import layoutReady from './behaviors/layoutReady.js';

initializeLayout();

window.App = {
    name: 'Lit-Boilerplate',
    state,
    layoutReady,
    Behavior,
    FormBehavior
    // export to global scope
};

namespace(window.App);
