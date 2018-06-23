# MAGUS's STATIC EXPRESS

This is an example project showing how to use express to serve static files.

## What?

The express app (node) acts like a web server responding to HTTP(s) requests.
The public facing webserver should be configured to treat this express app as it's proxy.

With that all done, an old school HTML site sitting in `public_html` can be served by this app.

## Why?
I created this project as a resource for people following the instructions on my blog post [Using Git and PM2 to Manage a Node App](https://blog.houseofthemagus.com/house-infrastructure).
