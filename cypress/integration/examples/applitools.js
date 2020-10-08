
/// <reference types="@applitools/eyes-cypress" />
const allureurls = ['https://www.allure.com/account/sign-in',
    'https://www.allure.com/branded/article/alr/allure-editor-in-chief-michelle-lee-jbeauty-tokyo',
    'https://www.allure.com/account/sign-up',
    'https://www.allure.com/gallery/best-body-washes',
    'https://www.allure.com/gallery/readers-choice-skin-care-product-winners'
    // 'https://www.allure.com/gallery/unique-halloween-costume-ideas',
    //'https://www.allure.com/search'
    // 'https://www.allure.com/sponsored/article/native-article-branded-content-by-with-text',
    // 'https://www.allure.com/sponsored/story/how-the-dyson-corrale-straighteners-flexing-plates-cause-less-damage-to-your-hair',
    // 'https://www.allure.com/story/sunday-riley-united-airlines-skin-care-in-flight-amenity-kits',
    // 'https://www.allure.com/story/wear-orange-national-gun-violence-awareness-day',
    // 'https://www.allure.com/topic/love',
    // 'https://www.allure.com/video/watch/jessica-alba-organic-vanilla-sugar-body-scrub'
    ]
describe('Should Visually Validate Conde Nast WebSite and Brands', () => {
    before(() => {
        cy.eyesOpen({
            appName: 'CondeNast-POC',
            testName: 'Allure URLs'

        });
    });
    after(() => {
        cy.eyesClose();
    });


    it(`Should take a full page screenshot of URL`, () => {
            for(let i=0; i<allureurls.length; i++){
                cy.visit(allureurls[i]);
                cy.log('Taking screenshot of:' + allureurls[i])
                cy.eyesCheckWindow({
                     target: 'window',
                     fully: true
                 })
            }

        });
});