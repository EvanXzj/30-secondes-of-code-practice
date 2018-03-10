// Removes HTML/XML tags from string.

// Use a regular expression to remove HTML/XML tags from a string.

const stripHTMLTags = (str) => str.replace(/<[^>]*>/g, '')

console.log(stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'))
