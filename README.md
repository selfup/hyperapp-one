# [HyperApp](https://github.com/hyperapp/hyperapp) Boilerplate Repo

*With JSX*

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

### Deploy to GitHub Pages:

First Time:

```bash
git checkout -b gh-pages
npm run build
git add . && git commit -m "built"
git push origin gh-pages
```

Every time after that:

```bash
git checkout gh-pages
git merge master
npm run build
git add . && git commit -m "built"
git push origin gh-pages
```

Now go visit:

(No custom domain) -> `<your_username>.github.io/<your_repo_name>`
(Custom domain) -> `<custom_domain>/<your_repo_name>`

### GIF:

![basic gif of app](https://cloud.githubusercontent.com/assets/9837366/22621800/117867c0-eae9-11e6-8a25-8aad7d120ac2.gif)
