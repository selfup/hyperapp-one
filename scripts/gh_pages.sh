#!/bin/sh
set -eu -o pipefail
set -x

git push origin :gh-pages \
  && git subtree push --prefix build origin gh-pages \
  && git branch -D gh-pages \
  && rm -rf build
