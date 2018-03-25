#!/bin/sh
set -eu -o pipefail
set -x

git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
