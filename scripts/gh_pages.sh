GH_PAGES=$(git branch | grep gh-pages)

function buildCommitAndPushToGhPages() {
  git merge master \
    && npm run build \
    && git add . \
    && git commit -m "built" \
    && git push origin gh-pages \
    && git checkout master
}

echo 'BUILDING AND DEPLOYING'

if [[ $GH_PAGES != '' ]]
then
  git checkout gh-pages && buildCommitAndPushToGhPages
else
  git checkout -b gh-pages && buildCommitAndPushToGhPages
fi

echo 'DEPLOYED!'
