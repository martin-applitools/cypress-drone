module.exports = {
    showLogs: false,
    saveDebugData: false,
    apiKey: 'zu4BybAMbOeRPtYF2mWHTAjNJOiuRPcD5JOUWcBP8lU110',
    concurrency: 25,
    useDom: false,
    enablePatterns: false,
    failCypressOnDiff: false,
    batchName: 'CondeNast Build: ' + process.env.DRONE_BUILD_NUMBER,
    batchId: process.env.DRONE_COMMIT_SHA,
    matchLevel: 'Layout',
    browser: [
        //W3C Top5 Screen Resolutions through 10/19 https://www.w3counter.com/globalstats.php
        {width: 1280, height: 720, name: 'chrome' },
        {width: 375, height: 720, name: 'chrome' },
        {width: 1280, height: 720, name: 'firefox'},
        {width: 375, height: 720, name: 'firefox'},
        {width: 1280, height: 720, name: 'safari'},
        {width: 375, height: 720, name: 'safari'},
        //{width: 1900, height: 1080, name: 'edge'},
        //{width: 1900, height: 1080, name: 'safari'},
        // //{width: 640, height: 360, name: 'chrome' },
        // //{width: 640, height: 360, name: 'firefox'},
        // //{width: 640, height: 360, name: 'ie11'},
        // //{width: 640, height: 360, name: 'edge'},
        // {width: 1366, height: 768, name: 'chrome' },
        // {width: 1366, height: 768, name: 'firefox'},
        // {width: 1366, height: 768, name: 'ie11'},
        // {width: 1366, height: 768, name: 'edge'},
        // {width: 1366, height: 768, name: 'safari'},
        // //{width: 667, height: 375, name: 'chrome' },
        // //{width: 667, height: 375, name: 'firefox'},
        // //{width: 667, height: 375, name: 'ie11'},
        // //{width: 667, height: 375, name: 'edge'},
        // {width: 1024, height: 768, name: 'chrome' },
        // {width: 1024, height: 768, name: 'firefox'},
        // {width: 1024, height: 768, name: 'ie11'},
        // {width: 1024, height: 768, name: 'edge'},
        // {width: 1024, height: 768, name: 'safari'},
        //{deviceName: "iPhone X", screenOrientation: 'portrait', name: 'chrome'},
        //{deviceName: "Pixel 2", screenOrientation: 'portrait', name: 'chrome'},
        //{deviceName: "Nexus 6", screenOrientation: 'portrait', name: 'chrome'},
        //{deviceName: "iPad", screenOrientation: 'landscape', name: 'chrome'},

    ],

};
