/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 * @param  {Function} done Function to execute when finished
 */
module.exports = (type, page, done) => {
	/**
	 * The URL to navigate to
	 * @type {String}
	 */
console.log(type)

	 if (type === "only one") {

		 expect(browser.elements('#searchResults ul li').value.length).to.equal(1);
	 } else if (type === 'more than one') {

		 expect(browser.elements('#searchResults ul li').value.length).to.be.at.least(2);
	 } else {

	 	browser.pause(2000)
	 	
	 	expect(browser.elements('#searchResults ul li').value.length).to.equal(0);
	 }
		
}