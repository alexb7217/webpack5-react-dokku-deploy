# react-for-dokku
A simple deployment ready webpack-react application for dokku.

## Instructions

1.  Clone this repo
2.  Run `npm install`
3.  Run `npm run dev`, **localhost:8080** will open up in your default browser

## Verify production code
1. Run `webpack -p`
2. Run `node server.js`, and visit **localhost:8080**, voila your code is ready for dokku now.

## Prepare server for deployment
1. On dokku server, prepare host environment
2. On local set remote `git remote add dokku dokku@your-fqdn.net:yourappname`
3. Run `git push dokku master`