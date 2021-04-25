const displayContent = (req, res) => {
  // Check url of page user is trying to access
  const url = req.url
  const method = req.method;
  
  if (url === '/profile') {
    // Tell the browser what type of content you are sending
    res.setHeader('Content-type', 'text/html')
    res.write('<p>Profile page</p>')

    // Stop and render whats above
    return res.end()
  } else if (url == '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>cheeseburgers</p>')
    return res.end()

  } else if (url == '/settings' && method == 'POST') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Form was submitted</h1>')
    return res.end()

  } else if (url == '/settings') {
    res.setHeader('Content-Type', 'text/html')
    res.write(
      '<h1>Settings</h1><form action="/settings" method="POST"><input type="text"><button type="submit">Press Me</button></form>'
    )
    return res.end()
    
  }

  // Tell the browser what type of content you are sending
  res.setHeader('Content-type', 'text/html')
  res.write('Page not found')

  // Stop and render whats above
  res.end()
}

module.exports = displayContent
