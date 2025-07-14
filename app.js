const http = require('http');
const url = require('url');

// Import local modules
const getRootMessage = require('./root');
const getAboutMessage = require('./about');
const getContactMessage = require('./contact');

const PORT = 5000;

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;

  switch (pathname) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>Welcome to my Node.js Application</h1>');
      res.write(`<p>${getRootMessage('John Smith')}</p>`);
      res.write('<hr>');
      res.write('<br><footer>Velasquez, Gabrielle Ainshley L. | Date: July 15, 2025 | Section: WD-302</footer>');
      break;

    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>This is the About Page</h1>');
      res.write(`<p>${getAboutMessage('John Smith')}</p>`);
      res.write('<hr>');
      res.write('<br><footer>Velasquez, Gabrielle Ainshley L. | Date: July 15, 2025 | Section: WD-302</footer>');
      break;

    case '/contact':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>This is the Contact Page</h1>');
      res.write(`<p>${getContactMessage('John Smith')}</p>`);
      res.write('<hr>');
      res.write('<br><footer>Velasquez, Gabrielle Ainshley L. | Date: July 15, 2025 | Section: WD-302</footer>');
      break;

    case '/gallery':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>This is the Gallery Page</h1>');
      res.write('<hr>');
      res.write('<br><footer>Velasquez, Gabrielle Ainshley L. | Date: July 15, 2025 | Section: WD-302</footer>');
      break;

    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('<h1>Invalid Request</h1>');
      res.write('<hr>');
      res.write('<br><footer>Velasquez, Gabrielle Ainshley L. | Date: July 15, 2025 | Section: WD-302</footer>');
      break;
  }
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// VELASQUEZ, GABRIELLE AINSHLEY L.     WD-302     JULY 14, 2025
