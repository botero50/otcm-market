const {Given, When} = require ('cucumber')
const {HomePage} = require('../page_object/home.page')
const homePage = new HomePage();

Given('I am on the OTCMarkets page', {timeout: 20000}, async () => {
    await homePage.navigateToOtcMarkets();
});

When('I search {string} market on the quote page', {timeout: 20000},async(searchCriteria) =>{
    await homePage.searchQuote(searchCriteria);
});

