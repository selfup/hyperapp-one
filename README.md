# Hyperapp One

[![Build Status](https://travis-ci.org/selfup/hyperapp-one.svg?branch=master)](https://travis-ci.org/selfup/hyperapp-one) [![Slack](https://hyperappjs.herokuapp.com/badge.svg)](https://hyperappjs.herokuapp.com 'Join us')

Hyperapp One is a Parcel boilerplate for quickstarting a web application with [Hyperapp](https://github.com/hyperapp/hyperapp), JSX, Prettier, and Airbnb's JavaScript [Styleguide](https://github.com/airbnb/javascript) via ESLint.

<div align=center>
  <a href=http://selfup.github.io/hyperapp-one>
    <img width=500 src=https://user-images.githubusercontent.com/56996/35205568-92ab325a-ff79-11e7-8978-81f0866c53af.gif />
  </a>
</div>

Redux Dev Tools support is included as well :smile:

<img width=500 src=https://user-images.githubusercontent.com/9837366/53659599-98ffd080-3c21-11e9-8404-b4a3072f6651.png />

<h2>Table of Contents</h2>

<!-- TOC -->

- [Installing](#installing)
- [Testing](#testing)
- [Development](#development)
  - [Wiping the Commit History](#wiping-the-commit-history)
  - [Deploying to GitHub Pages](#deploying-to-github-pages)
    - [First Time](#first-time)
    - [Every Time After](#every-time-after)
- [Stylistic Differences](#stylistic-differences)
- [License](#license)

<!-- /TOC -->

## Installing

```bash
git clone https://github.com/selfup/hyperapp-one
cd hyperapp-one
npm install
npm start
```

## Testing

```bash
npm test
```

All tests are in the root `test` directory. :tada:

## Development

Access [localhost:1234](http://localhost:1234).

The browser will reload as you save new code. 🚀

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

This will be interactive as it merges `master` into the `gh-pages` branch :pray:

```bash
./scripts/gh_pages.sh
```

Sometimes it will say there is nothing to commit even though you have more commits.

Just do a `git push` or a `git push -f` and then check back out to master :pray:

**Now visit**:

- No custom domain: `yourUserName.github.io/yourRepoName`
- With a custom domain: `yourCustomDomain/yourRepoName`

## Stylistic Differences

As you may have noticed I don't use [Standard](https://github.com/standard/standard). I prefer [ESLint](https://github.com/eslint/eslint) and [AirBnb](https://github.com/airbnb/javascript) as well as [Prettier](https://prettier.io/).

**Feel free to change this.** You can easily remove `.eslintrc.js` and code without a linter, as well as remove all `eslint` packages in the `package.json`!

I just like how strict AirBnb is, and how it forces you to learn certain ways of doing things manually. It also enforces rules that make it so git diffs are less of a pain to go through. VSCode and Atom have options to have ESLint auto correct (as much as it can) JS strictness. Prettier just makes everything consistent and pretty :smile:

I also use JSX instead of the built-in `h` function, because to me it is easier to go through Code Reviews with, and is _stylistically_ more pleasing to me. It also helps with UX teams as they know HTML, and JSX is closer to HTML than pure `h` calls. See [@hyperapp/html](https://github.com/hyperapp/html) for another alternative to JSX.

## License

Hyperapp One is MIT licensed. See [LICENSE](LICENSE).
