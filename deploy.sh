yarn build &&
git checkout gh-pages &&
rm -rf src tests css js public *.json *.ico *.js *.css *.html *.png *.jpg *.gif *.jpeg *.lock *.sh *.md &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit . -m "update" &&
git push --set-upstream origin gh-pages &&
git checkout -