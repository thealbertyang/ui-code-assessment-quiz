export const toCamelCase = (str) => str
    .replace(/\s(.)/g, function($1) { return $1.toUpperCase() })
    .replace(/\s/g, '')
    .replace(/^(.)/, function($1) { return $1.toLowerCase() })

export const sanitizeHtml = (unsafe) => unsafe
         .replace(/&amp;/g, "")
         .replace(/&lt;/g, "")
         .replace(/&gt;/g, "")
         .replace(/&quot;/g, "")
         .replace(/&#039;/g, "")
         .replace(/\?/g, "")
         .replace(/\./g, "")
         .replace(/\,/g, "")

export const toLowerCase = (str) => str ? str.toLowerCase() : ''
