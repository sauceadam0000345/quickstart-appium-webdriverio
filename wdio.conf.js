const { join } = require('path');
const config = require('./configs/wdio.shared.local.appium.conf');

// ==================
// Specify Test Files
// ==================
config.specs = ['./test/**/android.spec.ts'];

// ============
// Capabilities
// ============
config.maxInstances = 1;

config.capabilities = [
  {
    platformName: 'Android',
    'appium:deviceName': 'Android Emulator',
    'appium:platformVersion': '16.0',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    'appium:app': '/Users/adam.toth-fejel/Downloads/my.rn.demo.app.android.apk',
    'appium:appWaitActivity': 'com.saucelabs.mydemoapp.rn.MainActivity',
    'appium:noReset': true,
    'appium:newCommandTimeout': 240,
  },
];

// ✅ Add this block to explicitly point to your local Appium server
config.hostname = '127.0.0.1';
config.port = 4723;
config.path = '/';

module.exports.config = config;