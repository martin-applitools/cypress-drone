export function takeScreenshot(url, batchId) {
  cy.eyesOpen({
    appName: 'Verso',
    testName: url,
    batchId: process.env.DRONE_COMMIT_SHA
  });
  cy.visit(scenarioList[s][i], { failOnStatusCode: false })
  cy.scrollTo('bottom', { duration: 15000 })
  cy.scrollTo('top')
  cy.eyesCheckWindow({
    target: 'window',
    fully: true
  });
  cy.eyesClose();
}


