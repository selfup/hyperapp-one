GH_PAGES=$(git branch | grep gh-pages)

function commitAndPushToGhPages() {
  git merge master \
    && git add . \
    && git commit -m "built" \
    && git push origin gh-pages \
    && git checkout master
}

echo 'BUILDING AND DEPLOYING'

if [[ $GH_PAGES != '' ]]
then
  git checkout gh-pages && commitAndPushToGhPages
else
  git checkout -b gh-pages && commitAndPushToGhPages
fi

echo 'DEPLOYED!'
