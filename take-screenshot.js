export function takeScreenshot(url, batchId) {
  cy.eyesOpen({
    appName: 'Verso',
    testName: url,
    batchId
  });
  cy.eyesCheckWindow({
    target: 'window',
    fully: true
  });
  cy.eyesClose();
}


