/**
 * Injects the remote potluck.it bookmarklet script into the current page for
 * execution.
 * 
 * @see http://www.potluck.it/assets/bookmarklet.m.js
 */
(function inject_bookmarklet() {
    // URL of the bookmarklet provided by Potluck It
    var pit_src = '//www.potluck.it/assets/bookmarklet.m.js';
    // Inject the bookmarklet script into the current tab's 
    // document body for execution
    document.body.appendChild(document.createElement('script')).src = pit_src;
})();
