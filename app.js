const http = require('http')

const server = http.createServer((req, res) => {
  // Check url of page user is trying to access
  const url = req.url
  if (url === '/profile') {
    // Tell the browser what type of content you are sending
    res.setHeader('Content-type', 'text/html')
    res.write('<p>Profile page</p>')

    // Stop and render whats above
    return res.end()
  }

  // Tell the browser what type of content you are sending
  res.setHeader('Content-type', 'text/html')
  res.write('Page not found')

  // Stop and render whats above
  res.end()
})

server.listen(3001)
