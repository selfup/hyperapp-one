[![Build Status](https://travis-ci.org/selfup/hyperapp-one.svg?branch=master)](https://travis-ci.org/selfup/hyperapp-one)

# [HyperApp](https://github.com/hyperapp/hyperapp) *JSX* Boilerplate Repo

### To get started:

```bash
npm install
npm start
```

Visit: [webpack-dev-server](http://localhost:8080/webpack-dev-server/index.html)

This will reload as you save new code :smile:

*Now go code something awesome!*

***

### To wipe commit history:

**Make sure you are in the boilerplate root:**

You can either:

```bash
npm run wipe
```

And then add your remote: `git remote add origin <ssh_or_https_url>`

**OR** 

```bash
rm -rf .git
git init
git add .
git commit -m "initial commit"
```

And then add your remote: `git remote add origin <ssh_or_https_url>`

Then work as normal :smile:

***

### Deploy to GitHub Pages:

**First Time**:

```bash
git checkout -b gh-pages
npm run build
git add . && git commit -m "built"
git push origin gh-pages
```

**Every time after that**:

```bash
git checkout gh-pages
git merge master
npm run build
git add . && git commit -m "built"
git push origin gh-pages
```

**Now go visit**:

(No custom domain) -> `<your_username>.github.io/<your_repo_name>`

(Custom domain) -> `<custom_domain>/<your_repo_name>`

***

### Website:

[Over Here!](http://selfup.github.io/hyperapp-one)
