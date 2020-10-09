
/// <reference types="@applitools/eyes-cypress" />
const allureurls = ['https://www.allure.com/account/sign-in',
    'https://www.allure.com/account/sign-up',
    'https://www.allure.com/gallery/best-body-washes',
    'https://www.allure.com/gallery/readers-choice-skin-care-product-winners',
    'https://www.allure.com/gallery/unique-halloween-costume-ideas',
    'https://www.allure.com/search',
    //'https://www.allure.com/sponsored/article/native-article-branded-content-by-with-text',
    'https://www.allure.com/sponsored/story/how-the-dyson-corrale-straighteners-flexing-plates-cause-less-damage-to-your-hair',
    'https://www.allure.com/story/sunday-riley-united-airlines-skin-care-in-flight-amenity-kits',
    'https://www.allure.com/story/wear-orange-national-gun-violence-awareness-day',
    'https://www.allure.com/topic/love',
    'https://www.allure.com/video/watch/jessica-alba-organic-vanilla-sugar-body-scrub',
    'https://www.allure.com/branded/article/alr/allure-editor-in-chief-michelle-lee-jbeauty-tokyo']
const architectureurls = [
    'https://www.architecturaldigest.com/',
    'https://www.architecturaldigest.com/clever',
    'https://www.architecturaldigest.com/clever/conversation',
    'https://www.architecturaldigest.com/clever/decoration',
    'https://www.architecturaldigest.com/clever/renovation',
    'https://www.architecturaldigest.com/clever/shopping',
    'https://www.architecturaldigest.com/event/paris-design-week-2020',
    'https://www.architecturaldigest.com/events',
    'https://www.architecturaldigest.com/gallery/2020-geneva-motor-show-canceled-forcing-automakers-unveil-cars-online',
    // 'https://www.architecturaldigest.com/sponsored/gallery/native-gallery-product-gallery',
    'https://www.architecturaldigest.com/sponsored/story/sasha-bikoffs-secrets-to-throwing-the-perfect-party',
    'https://www.architecturaldigest.com/video/watch/open-door-open-door-kitchens-supercut'
    ]
const bonappetiturls = [
    'https://www.bonappetit.com/gallery/phoebe-robinson',
    //'https://www.bonappetit.com/sponsored/article/native-article-test-sponsored-content-by-text-healthyish',
    //'https://www.bonappetit.com/sponsored/gallery/native-gallery-product-gallery',
    'https://www.bonappetit.com/story/best-japanese-restaurants-seattle',
    'https://www.bonappetit.com/story/chicago-hot-dog-taste-test',
    'https://www.bonappetit.com/story/food-lovers-guide-eating-budget',
    'https://www.bonappetit.com/video/watch/it-s-alive-with-brad-brad-makes-pickled-onions-at-home'
    ]
const travelerurls = [
    'https://www.cntraveler.com/',
    'https://www.cntraveler.com//the-10-best-countries-for-expats',
    //'https://www.cntraveler.com/sponsored/story/testingnativearticle',
    'https://www.cntraveler.com/story/our-favorite-new-yorkers-on-the-best-things-in-all-five-boroughs',
    'https://www.cntraveler.com/video/watch/cnt-shorties-the-2016-shorties-film-festival'
    ]
describe('Should Visually Validate CondeNast Brand Sites', () => {
    it(`Should take a full page screenshot of Allure URLs`, () => {
            for(let i=0; i<allureurls.length; i++){
                cy.eyesOpen({
                    appName: 'CondeNast-POC',
                    testName: allureurls[i]

                });
                cy.visit(allureurls[i]);
                cy.wait(5000)
                cy.log('Taking screenshot of:' + allureurls[i])
                cy.eyesCheckWindow({
                     target: 'window',
                     fully: true
                 })
                cy.eyesClose();
            }

        });
    it(`Should take a full page screenshot of Architecture Digest URLs`, () => {
        for(let i=0; i<architectureurls.length; i++){
            cy.eyesOpen({
                appName: 'CondeNast-POC',
                testName: architectureurls[i]

            });
            cy.visit(architectureurls[i]);
            cy.wait(5000)
            cy.log('Taking screenshot of:' + architectureurls[i])
            cy.eyesCheckWindow({
                target: 'window',
                fully: true
            })
            cy.eyesClose();
        }

    });
    it(`Should take a full page screenshot of BonAppetit URLs`, () => {
        for(let i=0; i<bonappetiturls.length; i++){
            cy.eyesOpen({
                appName: 'CondeNast-POC',
                testName: bonappetiturls[i]

            });
            cy.visit(bonappetiturls[i]);
            cy.wait(5000)
            cy.log('Taking screenshot of:' + bonappetiturls[i])
            cy.eyesCheckWindow({
                target: 'window',
                fully: true
            })
            cy.eyesClose();
        }

    })
    it(`Should take a full page screenshot of CondeNast Traveler URLs`, () => {
        for(let i=0; i<travelerurls.length; i++){
            cy.eyesOpen({
                appName: 'CondeNast-POC',
                testName: travelerurls[i]

            });
            cy.visit(travelerurls[i]);
            cy.wait(5000)
            cy.log('Taking screenshot of:' + travelerurls[i])
            cy.eyesCheckWindow({
                target: 'window',
                fully: true
            })
            cy.eyesClose();
        }

    })
});