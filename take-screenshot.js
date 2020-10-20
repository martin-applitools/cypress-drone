export function takeScreenshot(url, batchId) {
  cy.eyesOpen({
    appName: 'Verso',
    testName: url,
    batchId: process.env.DRONE_COMMIT_SHA
  });
  cy.eyesCheckWindow({
    target: 'window',
    fully: true
  });
  cy.eyesClose();
}


