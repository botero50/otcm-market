class HomePage {
    get quoteInput () { return 'div:nth-child(2) > div > div > div > div > input[placeholder="Quote"]' }

    async navigateToOtcMarkets() {
        await page.goto('https://www.otcmarkets.com/');
    }
    
    async searchQuote(quote) {
        await page.type(this.quoteInput, quote);
        await page.click(`//*[@id="root"]/div/div[2]//*[contains(text(),"${quote}")]`);
    }

    async waitUntilPageLoad() {
        await Promise.all([
            page.waitForNavigation({timeout:10000}),
            page.waitForLoadState({ waitUntil: 'domcontentloaded' })]);
    }
} 
module.exports = { HomePage };