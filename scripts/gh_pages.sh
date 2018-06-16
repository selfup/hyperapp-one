GH_PAGES=$(git branch | grep gh-pages)

function commitAndPushToGhPages() {
  git checkout gh-pages \
    && git merge master \
    && git add . \
    && git commit -m "built" \
    && git push origin gh-pages \
    && git checkout master
}

echo 'BUILDING AND DEPLOYING'

if [[ $GH_PAGES != '' ]]
then
  commitAndPushToGhPages
else
  git checkout -b gh-pages && commitAndPushToGhPages
fi

echo 'DEPLOYED!'
