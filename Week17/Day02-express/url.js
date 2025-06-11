const myUrl = new URL("https://www.trademe.co.nz/aa/marketplace/books/search?search_string=books") 

console.log(myUrl.href)// full url
console.log(myUrl.origin)// protocol + host
console.log(myUrl.hostname)// host
console.log(myUrl.pathname)// path after domain
console.log(myUrl.search)// query string as a raw string
console.log(myUrl.searchParams)// query string as a structures URLSearchParams object
console.log(myUrl.searchParams.get("search_string"))// query string as a structures URLSearchParams object