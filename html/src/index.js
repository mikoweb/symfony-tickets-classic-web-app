// components bundles
import './components/bundles/components.js';

// app imports
import namespace from './core/namespace.js';
import initializeLayout from './behaviors/initializeLayout.js';
import state from './core/state';

initializeLayout();

window.App = {
    name: 'Lit-Boilerplate',
    state
    // export to global scope
};

namespace(window.App);
