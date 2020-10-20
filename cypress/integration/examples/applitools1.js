import { takeScreenshot } from "../../../take-screenshot"

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
    //'https://www.teenvogue.com/verso-homepage/homepage',
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
    //'https://www.newyorker.com/magazine/2019/10/07/todd-phillips-joker-is-no-laughing-matter',
    //'https://www.newyorker.com/puzzles-and-games-dept/crossword/2019/05/13',
    //'https://www.newyorker.com/sponsored/story/test-test',
    'https://www.newyorker.com/video/watch/obsessions-how-does-a-plant-grow-without-soil'
    ]
const themurls = [
    'https://www.them.us/',
    // 'https://www.them.us/sponsored/gallery/native-gallery-product-gallery',
    'https://www.them.us/sponsored/story/we-went-live-with-indya-moore-to-talk-about-black-trans-liberation',
    'https://www.them.us/story/cynthia-nixon-is-the-politician-we-need',
    'https://www.them.us/story/jodie-comer-season-3-killing-eve',
    // 'https://www.them.us/verso-homepage/homepage',
    'https://www.them.us/video/watch/first-person-episode-3'
    ]
const vanityfairurls = [
    'https://www.vanityfair.com/',
    'https://www.vanityfair.com/hollywood/2019/05/game-of-thrones-season-8-episode-4-photos-varys-spymaster-targaryen-stark-schism',
    'https://www.vanityfair.com/hollywood/2019/10/emilia-clarke-jason-momoa-kit-harington-thrones-reunion',
    // 'https://www.vanityfair.com/sponsored/article/native-article-test-paid-post',
    // 'https://www.vanityfair.com/sponsored/gallery/native-gallery-product-gallery',
    //'https://www.vanityfair.com/watch/reviews-john-dimaggio-futuramas-bender-reviews-impressions-of-his-voices'
    ]
const vogueurls = [
    'https://www.vogue.com/',
    'https://www.vogue.com/article/kylie-jenner-stopped-by-the-dreamiest-hotel-on-the-amalfi-coast',
    'https://www.vogue.com/contributor/liana-satenstein',
    'https://www.vogue.com/contributor/madeline-fass',
    'https://www.vogue.com/contributor/nicole-phelps',
    'https://www.vogue.com/fashion',
    'https://www.vogue.com/fashion-shows',
    'https://www.vogue.com/fashion-shows/designer/chanel',
    'https://www.vogue.com/fashion-shows/resort-2021/tanya-taylor',
    'https://www.vogue.com/fashion/celebrity-style',
    'https://www.vogue.com/shopping',
    'https://www.vogue.com/shopping/fashion',
    'https://www.vogue.com/slideshow/hairstylist-nigella-miller-on-her-wash-and-go-routine-speaking-up-and-expanding-her-hair-accessories-brand',
    'https://www.vogue.com/slideshow/happy-49th-birthday-naomi-campbell-a-look-back-at-the-muses-iconic-beauty-moments',
    //'https://www.vogue.com/sponsored/article/blingby-native-with-rail',
    //'https://www.vogue.com/sponsored/gallery/native-gallery-product-gallery',
    'https://www.vogue.com/travel-via-cinema',
    'https://www.vogue.com/video/watch/73-questions-with-dan-levy'
    ]
const wiredurls = [
    'https://www.wired.com/',
    'https://www.wired.com/account/sign-in',
    'https://www.wired.com/account/sign-up',
    'https://www.wired.com/gallery/apollo-11-best-gear-moon/',
    'https://www.wired.com/gallery/best-android-phones/',
    'https://www.wired.com/gallery/gifts-for-runners/',
    'https://www.wired.com/gallery/gifts-for-the-world-traveler/',
    'https://www.wired.com/review/review-amazon-fire-hd-8-kids-edition/',
    'https://www.wired.com/sponsored/story/as-the-us-and-china-race-toward-a-technology-cold-war-what-will-keep-the-peace/',
    'https://www.wired.com/story/beauty-madness-sending-man-moon/',
    //'https://www.wired.com/story/coronavirus-covid-19-asmr/',
    'https://www.wired.com/video/watch/each-and-every-every-dog-breed-explained-part-2'
    ]
//const scenarioList = [glamoururls]

const scenarioList = [glamoururls, gqurls, lennyletterurls, pitchforkurls, selfurls]
//
describe('Should Visually Validate CondeNast Brand Sites', () => {
    for (let s=0; s<scenarioList.length; s++) {
        for(let i=0; i<scenarioList[s].length; i++){
            cy.visit(scenarioList[s][i]);
            cy.scrollTo('bottom', { duration: 15000 })
            cy.scrollTo('top')
            it('Should take a full page screenshot ', () => {
                takeScreenshot(scenarioList[s][i])


                })
        };

    }
});