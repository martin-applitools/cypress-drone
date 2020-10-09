
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
    //'https://www.cntraveler.com/the-10-best-countries-for-expats',
    //'https://www.cntraveler.com/sponsored/story/testingnativearticle',
    'https://www.cntraveler.com/story/our-favorite-new-yorkers-on-the-best-things-in-all-five-boroughs',
    'https://www.cntraveler.com/video/watch/cnt-shorties-the-2016-shorties-film-festival'
    ]
const epiccuriousurls = [
    'https://www.epicurious.com/',
    //'https://www.epicurious.com/sponsored/article/native-article-test-paid-post',
    //'https://www.epicurious.com/gallery/native-gallery-product-gallery',
    'https://www.epicurious.com/video/watch/kids-try-burgers-from-10-states',
]
const glamoururls = [
    'https://www.glamour.com/',
    'https://www.glamour.com/about/hayden-panettiere',
    //'https://www.glamour.com/glamour/about/love',
    'https://www.glamour.com/gallery/10-jackets-every-woman-should-own',
    'https://www.glamour.com/gallery/best-curly-hair-products',
    'https://www.glamour.com/gallery/ulta-beauty-fall-haul-sale',
    //'https://www.glamour.com/sponsored/story/affiliate-enabled',
    //'https://www.glamour.com/sponsored/story/native-article-test-enable-publish-date',
    'https://www.glamour.com/story/beauty-awards',
    'https://www.glamour.com/story/game-changers-sports',
    'https://www.glamour.com/story/glamour-beauty-awards-readers-choice-vote',
    'https://www.glamour.com/story/sophie-turner-dickies-t-shirt-mango-mules',
    'https://www.glamour.com/video/watch/p-nk-watches-fan-covers-on-youtube'
    ]
const gqurls = [
    'https://www.gq.com/',
    'https://www.gq.com/culture',
    'https://www.gq.com/gallery/spring-menswear-deals-you-wont-want-to-miss',
    'https://www.gq.com/gq-recommends',
    'https://www.gq.com/grooming',
    // 'https://www.gq.com/sponsored/article/native-article-test-enable-publish-date',
    // 'https://www.gq.com/sponsored/gallery/native-gallery-product-gallery',
    'https://www.gq.com/story/sharp-objects-should-have-been-harder-to-watch',
    'https://www.gq.com/style',
    'https://www.gq.com/video/watch/above-average-joe-episode-1',
    'https://www.gq.com/wellness'
    ]
const lennyletterurls = [
    'https://www.lennyletter.com/',
    'https://www.lennyletter.com/contributor/kesha',
    'https://www.lennyletter.com/contributor/lena-dunham'
    ]
const pitchforkurls = [
    'https://pitchfork.com/news/david-bowie-documentary-the-first-five-years-announced/',
]
const selfurls = [
    'https://www.self.com/',
    'https://www.self.com/contributor/jackie-newgent',
    'https://www.self.com/contributor/jenn-sinrich',
    'https://www.self.com/gallery/6-high-protein-meals-that-only-need-5-ingredients',
    'https://www.self.com/gallery/coconut-milk-recipes',
    'https://www.self.com/gallery/dumbbell-exercises-that-work-your-core',
    // 'https://www.self.com/sponsored/article/native-article-test-single-column',
    // 'https://www.self.com/sponsored/gallery/native-gallery-product-gallery',
    'https://www.self.com/story/plant-based-ramadan-meal-plan',
    'https://www.self.com/story/what-it-means-to-be-black-in-fitness',
    'https://www.self.com/video/watch/surfers-try-to-keep-up-with-snowboarders'
    ]
const teenvogueurls = [
    'https://www.teenvogue.com/',
    'https://www.teenvogue.com/gallery/the-best-lipstick-shades-to-wear-this-halloween-and-how-to-do-it',
    'https://www.teenvogue.com/gallery/your-perfect-dress-for-prom-is-right-here',
    // 'https://www.teenvogue.com/sponsored/gallery/native-gallery-product-gallery',
    'https://www.teenvogue.com/sponsored/story/20-silver-linings-to-virtual-prom',
    'https://www.teenvogue.com/tag/love',
    'https://www.teenvogue.com/verso-homepage/homepage',
    'https://www.teenvogue.com/video/watch/casey-cott-reviews-riverdale-memes',
    ]
const thenewyorkerurls = [
    'https://www.newyorker.com/',
    'https://www.newyorker.com/account/sign-up',
    'https://www.newyorker.com/cartoon/a22400',
    'https://www.newyorker.com/cartoons/daily-cartoon/thursday-august-22nd-chosen-one',
    'https://www.newyorker.com/cartoons/issue-cartoons/cartoons-from-the-november-11-2019-issue',
    'https://www.newyorker.com/culture/the-new-yorker-interview/if-youre-in-the-song-keep-on-playing-pharoah-sanders-interview',
    'https://www.newyorker.com/magazine/2019/06/10/the-children',
    'https://www.newyorker.com/magazine/2019/10/07/todd-phillips-joker-is-no-laughing-matter',
    'https://www.newyorker.com/puzzles-and-games-dept/crossword/2019/05/13',
    //'https://www.newyorker.com/sponsored/story/test-test',
    'https://www.newyorker.com/video/watch/obsessions-how-does-a-plant-grow-without-soil'
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
    it(`Should take a full page screenshot of Epic Curious URLs`, () => {
        for(let i=0; i<epiccuriousurls.length; i++){
            cy.eyesOpen({
                appName: 'CondeNast-POC',
                testName: epiccuriousurls[i]

            });
            cy.visit(epiccuriousurls[i]);
            cy.wait(5000)
            cy.log('Taking screenshot of:' + epiccuriousurls[i])
            cy.eyesCheckWindow({
                target: 'window',
                fully: true
            })
            cy.eyesClose();
        }
    })
    it(`Should take a full page screenshot of Glamour URLs`, () => {
        for(let i=0; i<glamoururls.length; i++){
            cy.eyesOpen({
                appName: 'CondeNast-POC',
                testName: glamoururls[i]

            });
            cy.visit(glamoururls[i]);
            cy.wait(5000)
            cy.log('Taking screenshot of:' + glamoururls[i])
            cy.eyesCheckWindow({
                target: 'window',
                fully: true
            })
            cy.eyesClose();
        }
    })
    it(`Should take a full page screenshot of GQ URLs`, () => {
        for(let i=0; i<gqurls.length; i++){
            cy.eyesOpen({
                appName: 'CondeNast-POC',
                testName: gqurls[i]

            });
            cy.visit(gqurls[i]);
            cy.wait(5000)
            cy.log('Taking screenshot of:' + gqurls[i])
            cy.eyesCheckWindow({
                target: 'window',
                fully: true
            })
            cy.eyesClose();
        }
    })
    it(`Should take a full page screenshot of LennyLetter URLs`, () => {
        for(let i=0; i<lennyletterurls.length; i++){
            cy.eyesOpen({
                appName: 'CondeNast-POC',
                testName: lennyletterurls[i]

            });
            cy.visit(lennyletterurls[i]);
            cy.wait(5000)
            cy.log('Taking screenshot of:' + lennyletterurls[i])
            cy.eyesCheckWindow({
                target: 'window',
                fully: true
            })
            cy.eyesClose();
        }
    })
    it(`Should take a full page screenshot of Pitchfork URLs`, () => {
        for(let i=0; i<pitchforkurls.length; i++){
            cy.eyesOpen({
                appName: 'CondeNast-POC',
                testName: pitchforkurls[i]

            });
            cy.visit(pitchforkurls[i]);
            cy.wait(5000)
            cy.log('Taking screenshot of:' + pitchforkurls[i])
            cy.eyesCheckWindow({
                target: 'window',
                fully: true
            })
            cy.eyesClose();
        }
    })
    it(`Should take a full page screenshot of Self URLs`, () => {
        for(let i=0; i<selfurls.length; i++){
            cy.eyesOpen({
                appName: 'CondeNast-POC',
                testName: selfurls[i]

            });
            cy.visit(selfurls[i]);
            cy.wait(5000)
            cy.log('Taking screenshot of:' + selfurls[i])
            cy.eyesCheckWindow({
                target: 'window',
                fully: true
            })
            cy.eyesClose();
        }
    })
    it(`Should take a full page screenshot of Teen Vogue URLs`, () => {
        for(let i=0; i<teenvogueurls.length; i++){
            cy.eyesOpen({
                appName: 'CondeNast-POC',
                testName: teenvogueurls[i]

            });
            cy.visit(teenvogueurls[i]);
            cy.wait(5000)
            cy.log('Taking screenshot of:' + teenvogueurls[i])
            cy.eyesCheckWindow({
                target: 'window',
                fully: true
            })
            cy.eyesClose();
        }
    })
    it(`Should take a full page screenshot of The New Yorker URLs`, () => {
        for(let i=0; i<thenewyorkerurls.length; i++){
            cy.eyesOpen({
                appName: 'CondeNast-POC',
                testName: thenewyorkerurls[i]

            });
            cy.visit(thenewyorkerurls[i]);
            cy.wait(5000)
            cy.log('Taking screenshot of:' + thenewyorkerurls[i])
            cy.eyesCheckWindow({
                target: 'window',
                fully: true
            })
            cy.eyesClose();
        }
    })
});