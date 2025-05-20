// Import http module from node.js
const http = require("http");

const userList = [
  {
    name: "john",
    age: 27,
  },
  {
    name: "Joe",
    age: 53,
  },
  {
    name: "Adam",
    age: 34,
  },
];
 

const server = http.createServer((request, response) => {
    console.log("Server created");
    // console.log(request.url);

    if (request.url === "/api/greet") {
        response.write("<h1>Hello rob thanks for visiting this url</h1>");
        response.end()
    }else if(request.url === "/api/userlist") {
        response.write(JSON.stringify(userList));
        response.end()
    }else {
        response.write("<h1>Page not found</h1>");
        response.end()
    }
})

server.listen(4000, () => {
    console.log("Server listening on port 4000");
})

// node server.js to run from terminal