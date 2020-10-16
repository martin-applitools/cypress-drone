module.exports = {
    saveDebugData: false,
    apiKey: 'zu4BybAMbOeRPtYF2mWHTAjNJOiuRPcD5JOUWcBP8lU110',
    dontCloseBatches: true,
    batchId: process.env.DRONE_COMMIT_SHA,
    disableBrowserFetching: true,
    concurrency: 25,
    useDom: true,
    enablePatterns: true,
    failCypressOnDiff: false,
    browser: [
        { width: 1280, height: 720, name: 'chrome'  },
        { width: 375, height: 720, name: 'chrome'  }
    ]
};