class SearchQuote {

    get openLabel () { return '//label[contains(text(),"Open")]/parent::div/p' }
    get marketCapLabel () { return '//label[contains(text(),"Market Cap")]/parent::*/parent::*/parent::*/p' }
    get securityLabel () { return 'div > div >a[href *="/security"]' }
    
    async waitUntilPageLoad() {

      await Promise.all([
        page.waitForNavigation({timeout:10000}),
        page.waitForLoadState({ waitUntil: 'domcontentloaded' })]);
  }

  async getCompanyName(companyName) {
    return page.textContent(`//h1[contains(text(),"${companyName}")]`);
  }

  async getOpenLabel() {
    return page.textContent(this.openLabel);
  }  

  async getMarketCapLabel() {
    try {
      return page.textContent(this.marketCapLabel);
    }catch(error) {
      return '0';
    }
  }

  async getSymbolImageElement() {
    return page.$$('img[src *="/logos/tier/"]');
  }

  async clickOnSecurityPage() {
    await page.click(this.securityLabel);
  }

} 
  module.exports = { SearchQuote };