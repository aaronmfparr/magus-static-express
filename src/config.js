// ------------------------------------------------------------------------------
// MAGUS's STATIC EXPRESS config file
// ------------------------------------------------------------------------------
// PORT should match the localhost PORT which your webserver proxies to internally
// for NGINX look at your config in /etc/nginx/sites-available/

// if you want to get fancy you could have different configs locally and remotely on your server
// that is why I put this out here
const PORT = 3000;

module.exports =
{
  'PORT': PORT
};
