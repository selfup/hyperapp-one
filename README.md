# Hyperapp One Boilerplate

[![Build Status](https://travis-ci.org/selfup/hyperapp-one.svg?branch=master)](https://travis-ci.org/selfup/hyperapp-one)

Webpack boilerplate for quickstarting a web app with [Hyperapp](https://github.com/hyperapp/hyperapp), JSX, and Airbnb's JavaScript [Styleguide](https://github.com/airbnb/javascript) via ESLint.

[Try it out here](http://selfup.github.io/hyperapp-one)!

## Install

```bash
git clone https://github.com/selfup/hyperapp-one
cd hyperapp-one
npm install
npm start
```

## Testing

`npm test`

All tests are in the root `test` directory :tada:

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

### Stylistic Differences

As you may have noticed I don't use `prettier` or the `standard` style. I prefer ESLint and AirBnb.

**Feel free to change this!** _You can easily remove `.eslintrc.js` and code without a linter, as well as remove all `eslint` packages in the `package.json`!_

I just like how strict AirBnb is, and how it forces you to learn certain ways of doing things manually. It also enforces rules that make it so git diffs are less of a pain to go through. VSCode and Atom have options to have ESLint auto correct (as much as it can) the formatting via the ESLint plugin.

I also use JSX instead of pure `h` because to me it is easier to go through Code Reviews with, and is _stylistically_ more pleasing to me. It also helps with UX teams as they know HTML and JSX is closer to HTML than pure `h` calls.
