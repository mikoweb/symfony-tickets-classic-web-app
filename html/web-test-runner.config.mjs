import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
    nodeResolve: true,
    coverage: true,
    playwright: true,
    files: 'test/**/*.test.js',
    browsers: [
        playwrightLauncher({product: 'firefox'}),
        playwrightLauncher({product: 'chromium'}),
        playwrightLauncher({product: 'webkit'}),
    ],
    testFramework: {
        config: {
            ui: 'bdd',
            timeout: '2000',
        },
    },
};
