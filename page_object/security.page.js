class SecurityPage {

  get marketCapValueLabel () { return '//label[contains(text(),"Market Cap")]/parent::*/parent::*/parent::*/parent::*/parent::*/div[2]' }
  get marketCapDateLabel () { return '//label[contains(text(),"Market Cap")]/parent::*/parent::*/parent::*/parent::*/parent::*/div[3]' }

  async getMarketCap() {
    return page.textContent(this.marketCapValueLabel);
  }

  async getDate() {
    return page.textContent(this.marketCapDateLabel);
  }
} 
  module.exports = { SecurityPage };