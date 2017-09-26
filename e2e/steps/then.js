const checkErrorMessageText = require('../support/checks/checkErrorMessageText');
const checkNumberOfProducts = require('../support/checks/checkNumberOfProducts');
const checkProductItemTitle = require('../support/checks/checkProductItemTitle');
const checkElementVisibility = require('../support/checks/checkElementVisibility');
const isRsultsOrdered = require('../support/checks/isRsultsOrdered'); 
const clickElement = require('../support/actions/clickElement');
const ckeckPageUrl = require ('../support/checks/ckeckPageUrl');
const ckeckPageContent = require('../support/checks/ckeckPageContent') 

module.exports = function then() {

	this.Then(/^the error message "([^"]*)?" is displayed$/, checkErrorMessageText);

	this.Then(/^"([^"]*)?" product will be vissible$/, checkNumberOfProducts);

	this.Then(/^visible "([^"]*)?" title will contains "([^"]*)?"$/, checkProductItemTitle);

	this.Then(/^"([^"]*)?" button will "([^"]*)?" visible$/, checkElementVisibility);

	this.Then(/^the the results should be "([^"]*)?"$/, isRsultsOrdered);

	this.Then(/^user clicks "([^"]*)?" button$/, clickElement);

	this.Then(/^user should be moved to "([^"]*)?" page$/, ckeckPageUrl);

	this.Then(/^user should see the "([^"]*)?" page content$/, ckeckPageContent);

};