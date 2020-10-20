/// <reference types="Cypress" />
//const { getScreenshotUrls } = require('../../config/brand-aggregator');
const { takeScreenshot } = require('take-screenshot');
const testTypes = getScreenshotUrls();
const uniqueUrls = [];
//const screenshotTests = require('./screenshot-tests.json');
const batchId = Cypress.env('DRONE_COMMIT_SHA');
const authCookieName = 'CN_userAuth';
const envCookie = Cypress.env('authenticatedCookie');

const runTests = (url, stagingApiDomain) => {
  describe(`Screenshots - ${url}`, () => {
    beforeEach(() => {
      if (stagingApiDomain) {
        cy.setCookie(authCookieName, envCookie, {
          stagingApiDomain
        });
      }
      cy.setCookie(authCookieName, envCookie);
      cy.visit(`${url}`, { failOnStatusCode: false });
    });

    it('Takes screenshot of page', () => {
      takeScreenshot(cy, url, batchId);
    });
  });
};

const gatherScreenshotUrls = () => {
  const out = [];
  Object.keys(testTypes).forEach((test) => {
    if (!screenshotTests.includes(test)) {
      return;
    }

    const testUrls = testTypes[test];
    testUrls.forEach((test) => {
      if (!uniqueUrls.includes(test.url)) {
        uniqueUrls.push(test.url);
        out.push(test);
      }
    });
  });

  return out.slice(0, 75);
};

gatherScreenshotUrls().forEach((testData) => {
  //const { url, stagingApiDomain = '' } = testData;
  runTests(url, stagingApiDomain);
});
