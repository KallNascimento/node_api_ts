const { resolve } = require('path');
const root = resolve(__dirname);
const rootConfig = require(`${root}/jest.config.ts`);

module.exports = {...rootConfig, ...{
    rootDir: root,
    displayName: 'end2end-tests',
    setupFileAfeterEnv: ["<rootDir>/test/jest-setup.ts"],
    testMatch:[`<rootDir>/src/**/*.test.ts`],
    }}