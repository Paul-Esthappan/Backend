var a = require('http')
var b = require('url')

var c = a.createServer((req, res) => {
    const urls = b.parse(req.url).pathname;
    console.log(urls);

    if (urls == '/') {
        res.write("home page")
        res.end()
    }
    else if (urls == '/next') {
        res.write("next page")
        res.end()
    }
    else if (urls == '/about') {
        res.write("about page")
        res.end()
    }
    else{
        res.write("page not found")
        res.end()
    }
})

c.listen(7000)
