/**
 * Check the title of the current browser window
 * @param  {Type}     falseCase     Whether to check if the title matches the
 *                                  expected value or not
 * @param  {Type}     expectedTitle The expected title
 * @param  {Function} done          Function to execute when finished
 */
module.exports = (selector, isVisible) => {
    /**
     * The title of the current browser window
     * @type {String}
     */

	 if (selector === 'orderBy') {
	 	selector = '#' + selector
	 } else {
	 	selector = '.' + selector;
	 } 
	 
	let visibilityClass = browser.element(selector).getAttribute('class');

	if (isVisible === 'not be') {
		expect(visibilityClass).not.to.have.string('hide')
	} else {
		expect(visibilityClass).to.have.string('hide')
	}
};