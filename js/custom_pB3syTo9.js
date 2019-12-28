/* Slide 5 (#94) */
// without a specific API, you may try a similar load function
// perhaps with a setTimeout to ensure the iframe's content is fully loaded
 var iframe = document.getElementById('pixelsshoppingcartiframe');

var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
