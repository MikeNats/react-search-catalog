
const openBrowser = require('../support/actions/openBrowser');

module.exports = function given() {
	this.Given(/^the user is in "([^"]*)?"$/, openBrowser);
};