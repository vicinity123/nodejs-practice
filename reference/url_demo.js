const url = require("url")

const myUrl = new URL(
  "https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=2425s&ab_channel=TraversyMedia"
)

// Serialized URL
// console.log(myUrl.toString());
console.log(myUrl.href)

// Host (root domain)
console.log(myUrl.host)

// Host name (doesn't include ports)
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

// Serialized Query
console.log(myUrl.search)
// Params Object
console.log(myUrl.searchParams)

// Adding params
myUrl.searchParams.append("creator", "Brad Traversy")

// console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`)
})
