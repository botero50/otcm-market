const {When} = require ('cucumber')
const {SearchQuote} = require('../page_object/search_quote.page')
const {SecurityPage} = require('../page_object/security.page')
const searchQuote = new SearchQuote();
const securityPage = new SecurityPage();
var expect = require('expect')
let openLabel;
let marketCapOnHome;
let companyName;

When('I capture all the variables required by the test for {string}', {timeout: 20000}, async(quote)=>{
    console.log(`Data for: ${quote}-----------`);
    openLabel = await searchQuote.getOpenLabel()
    marketCapOnHome = await searchQuote.getMarketCapLabel()
    companyName = await searchQuote.getCompanyName(quote)
});

When('I assert the Company name {string} and the Symbol', {timeout: 20000}, async(company)=>{
    await expect(companyName).toBe(company);
    await expect( await searchQuote.getSymbolImageElement() ).toHaveLength(1)
});

When('I open the security tab', {timeout: 20000}, async()=>{
    await searchQuote.clickOnSecurityPage();
});

When('I check if the market cap on home is equal to the market cap on security page', {timeout: 20000}, async()=>{
    let marketCapOnSecurity = await securityPage.getMarketCap();
    await expect(marketCapOnSecurity).toBe(marketCapOnHome);
});

When('I print the market cap and the date', {timeout: 20000}, async()=>{
    console.log(`market cap is: ${await securityPage.getMarketCap()}`);
    console.log(`date is: ${await securityPage.getDate()}`);
    console.log(`------------------------------`);
});