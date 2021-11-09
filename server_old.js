const http = require("http");

// /home: "Home page data"
// /about: "About page data"

const server = http.createServer((req,res) => {
    console.log("Hello from server");
    console.log(req.url);

     res.setHeader("Content-Type", "text/html");
    // res.write("<h1>Hello Heading</h1>");
    // res.end();

    switch(req.url){
        case "/home":
            res.write("Home page data");
            res.end();
            break;
        case "/about":
            res.write("About page data");
            res.end();
            break;
        default:
            res.write("404 not found");
            res.end();
            break;
    }

});

server.listen(3000,'localhost',() => {
    console.log("Server running on port 3000");
});