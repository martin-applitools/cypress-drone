
const urls = [//'https://www.condenast.com/',
              'https://www.condenast.com/brands/gq',
              'https://www.condenast.com/brands/ad',
              'https://www.condenast.com/brands/allure',
              'https://www.condenast.com/brands/ars-technica',
              //'https://www.condenast.com/brands/bon-app%C3%A9ti',
              //'https://www.condenast.com/brands/cond%C3%A9-nast-johansens',
              //d'https://www.condenast.com/brands/cond%C3%A9-nast-traveller',
              'https://www.condenast.com/brands/epicurious',
              'https://www.condenast.com/brands/glamour',
              'https://www.condenast.com/brands/gq-style',
              'https://www.condenast.com/brands/house-and-garden',
              'https://www.condenast.com/brands/la-cucina-italiana',
              'https://www.condenast.com/brands/love',
              'https://www.condenast.com/brands/l\'uomo',
              'https://www.condenast.com/brands/pitchfork',
              'https://www.condenast.com/brands/self',
              'https://www.condenast.com/brands/tatler',
              'https://www.condenast.com/brands/teen-vogue',
              'https://www.condenast.com/brands/them',
              'https://www.condenast.com/brands/the-new-yorker',
              'https://www.condenast.com/brands/the-world-of-interiors',
              'https://www.condenast.com/brands/vanity-fair',
              'https://www.condenast.com/brands/vogue',
              'https://www.condenast.com/brands/vogue-business',
              'https://www.condenast.com/brands/vogue-global-network',
              'https://www.condenast.com/brands/wired'
                ];
describe('Should Visually Validate Conde Nast WebSite and Brands', () => {
        it(`Should take a full page screenshot of URL`, () => {
            for(let i=0; i<urls.length; i++){
                cy.eyesOpen({
                        appName:'CondeNast',
                        testName:urls[i],
                }
                )
                cy.visit(urls[i]);
                cy.eyesCheckWindow({
                     tag: urls[i],
                     target: 'window',
                     fully: true
                 })
                cy.eyesClose()
            }

        });
});