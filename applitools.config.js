module.exports = {
    showLogs: false,
    dontCloseBatches: true,
    apiKey: 'zu4BybAMbOeRPtYF2mWHTAjNJOiuRPcD5JOUWcBP8lU110',
    concurrency: 25,
    disableBrowserFetching: true,
    batchSequenceName: 'CondeNastPOC',
    notifyOnCompletion: true,
    useDom: true,
    enablePatterns: true,
    failCypressOnDiff: false,
    batchId: process.env.DRONE_COMMIT_SHA,
    matchLevel: 'Layout',
    browser: [
        //W3C Top5 Screen Resolutions through 10/19 https://www.w3counter.com/globalstats.php
        {width: 1280, height: 720 },
    ],
};