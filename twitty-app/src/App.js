import './App.scss';

const http = require('http');
const url = require('url');

const port = 3000;

const users = [
  {
    id: 1,
    name: 'John Doe',
    handle: '@johndoe',
    bio: 'Just a regular guy',
  },
  {
    id: 2,
    name: 'Jane Smith',
    handle: '@janesmith',
    bio: 'Coder and coffee lover',
  },
];

const tweets = [
  {
    id: 1,
    userId: 1,
    content: 'Just had the best burger ever #yum',
  },
  {
    id: 2,
    userId: 2,
    content: 'Working on a new project, can\'t wait to share!',
  },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/users') {
    if (req.method === 'GET') {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(users));
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const user = JSON.parse(body);
        user.id = users.length + 1;
        users.push(user);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(user));
      });
    }
  } else if (parsedUrl.pathname.startsWith('/users/')) {
    const id = parseInt(parsedUrl.pathname.slice(7));
    const user = users.find(u => u.id === id);
    if (!user) {
      res.statusCode = 404;
      res.end('User not found');
      return;
    }
    if (req.method === 'GET') {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(user));
    } else if (req.method === 'PUT') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        user.name = JSON.parse(body).name;
        user.handle = JSON.parse(body).handle;
        user.bio = JSON.parse(body).bio;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(user));
      });
    } else if (req.method === 'DELETE') {
      const index = users.findIndex(u => u.id === id);
      users.splice(index, 1);
      res.end(`User with ID ${id} deleted`);
    }
  }

  if (parsedUrl.pathname === '/tweets') {
    if (req.method === 'GET') {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(tweets));
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const tweet = JSON.parse(body);
        tweet.id = tweets.length + 1;
        tweets.push(tweet);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(tweet));

#narazie wersja testowa :>