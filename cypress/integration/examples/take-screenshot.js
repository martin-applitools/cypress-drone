function takeScreenshot(cy, url) {
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

module.exports = { takeScreenshot };
