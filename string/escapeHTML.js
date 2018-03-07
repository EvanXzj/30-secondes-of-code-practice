// Escapes a string for use in HTML.

// Use String.replace() with a regexp that matches the characters that need to be escaped,
// using a callback function to replace each character instance with its associated escaped character using a dictionary (object).

const escapeHTML = (str) =>
  str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  )

// console.log(escapeHTML('<a href="#">Me & you</a>'))

exports.escapeHTML = escapeHTML
