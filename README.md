# Hyperapp One Boilerplate

[![Build Status](https://travis-ci.org/selfup/hyperapp-one.svg?branch=master)](https://travis-ci.org/selfup/hyperapp-one)

Webpack boilerplate for quickstarting a web app with [Hyperapp](https://github.com/hyperapp/hyperapp), JSX and Airbnb's JavaScript [Styleguide](https://github.com/airbnb/javascript) via ESLint.

[Try it out here](http://selfup.github.io/hyperapp-one)!

## Install

```bash
git clone https://github.com/selfup/hyperapp-one
cd hyperapp-one
npm install
npm start
```

## Development

Access [localhost:8080/webpack-dev-server](http://localhost:8080/webpack-dev-server/index.html).

The browser will reload as you save new code! 🚀💯

Now go code something awesome!

### Wiping the Commit History

Make sure you are in the boilerplate root and run:

```bash
npm run wipe
```

Add your remote:

```bash
git remote add origin <ssh_or_https_url>
```

Then work as usual.

Or if you prefer to do it yourself from scratch:

```bash
rm -rf .git
git init
git add .
git commit -m "initial commit"
```

Then add your remote and work from there as usual.

```bash
git remote add origin <ssh_or_https_url>
```

### Deploying to GitHub Pages

#### The first time

```bash
git checkout -b gh-pages
npm run build
git add . && git commit -m "built"
git push origin gh-pages
```

#### Every time after that

```bash
git checkout gh-pages
git merge master
npm run build
git add . && git commit -m "built"
git push origin gh-pages
```

**Now go visit**:

* (No custom domain) -> `<your_username>.github.io/<your_repo_name>`
* (Custom domain) -> `<custom_domain>/<your_repo_name>`
