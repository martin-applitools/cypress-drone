export function takeScreenshot(url) {
  cy.eyesOpen({
    appName: 'Verso',
    testName: url,
  });
  cy.eyesCheckWindow({
    target: 'window',
    fully: true
  });
  cy.eyesClose();
}


