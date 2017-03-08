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

```bash
rm -rf .git
git init
git add .
git commit -m "initial commit"
```

Then work as normal and don't forget to add the new remote before pushing up!

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

### Example GIF:

![screen shot](https://cloud.githubusercontent.com/assets/9837366/23686198/5477d080-0365-11e7-85af-f8357401e496.png)
